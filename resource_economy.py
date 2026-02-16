"""
Genesis Frontier - Resource Economy System
A planetary management MMO resource economy with risk-reward mechanics.
"""

from enum import Enum
from dataclasses import dataclass, field
from typing import Dict, List, Optional
import math


class ResourceType(Enum):
    """Available resource types in the game."""
    FOOD = "food"
    METALS = "metals"
    RARE_MINERALS = "rare_minerals"
    ENERGY = "energy"
    MANUFACTURED_GOODS = "manufactured_goods"


class BuildingType(Enum):
    """Production building types."""
    # Basic production
    FARM = "farm"
    MINE = "mine"
    QUARRY = "quarry"
    POWER_PLANT = "power_plant"
    FACTORY = "factory"
    
    # Advanced production
    HYDROPONICS_BAY = "hydroponics_bay"
    AUTOMATED_MINE = "automated_mine"
    DEEP_CORE_EXTRACTOR = "deep_core_extractor"
    FUSION_REACTOR = "fusion_reactor"
    ADVANCED_FACTORY = "advanced_factory"


@dataclass
class Resource:
    """Represents a quantity of a specific resource."""
    type: ResourceType
    amount: float
    
    def __add__(self, other):
        if isinstance(other, Resource) and other.type == self.type:
            return Resource(self.type, self.amount + other.amount)
        raise ValueError("Cannot add resources of different types")
    
    def __sub__(self, other):
        if isinstance(other, Resource) and other.type == self.type:
            return Resource(self.type, self.amount - other.amount)
        raise ValueError("Cannot subtract resources of different types")


@dataclass
class ProductionBuilding:
    """
    Represents a production building with costs, outputs, and upkeep.
    """
    type: BuildingType
    name: str
    description: str
    
    # Construction costs
    construction_costs: Dict[ResourceType, float]
    construction_time: int  # in game turns/cycles
    
    # Production
    produces: Dict[ResourceType, float]  # per turn
    production_efficiency: float = 1.0  # 0.0 to 1.0
    
    # Upkeep costs per turn
    upkeep_costs: Dict[ResourceType, float] = field(default_factory=dict)
    
    # Stability impact
    stability_cost: float = 0.0  # how much this building strains the planet
    risk_factor: float = 0.0  # risk of failure/accident
    
    # Level and upgrades
    level: int = 1
    max_level: int = 5
    
    def get_net_production(self) -> Dict[ResourceType, float]:
        """Calculate net production after upkeep costs."""
        net = {}
        
        # Add production
        for resource_type, amount in self.produces.items():
            net[resource_type] = amount * self.production_efficiency
        
        # Subtract upkeep
        for resource_type, amount in self.upkeep_costs.items():
            net[resource_type] = net.get(resource_type, 0) - amount
        
        return net
    
    def get_total_construction_cost(self) -> float:
        """Get total construction cost as a single value (for comparison)."""
        # Weight different resources differently
        weights = {
            ResourceType.FOOD: 1.0,
            ResourceType.METALS: 2.0,
            ResourceType.RARE_MINERALS: 5.0,
            ResourceType.ENERGY: 1.5,
            ResourceType.MANUFACTURED_GOODS: 3.0
        }
        total = 0
        for resource_type, amount in self.construction_costs.items():
            total += amount * weights[resource_type]
        return total
    
    def upgrade(self) -> bool:
        """Upgrade the building to the next level."""
        if self.level >= self.max_level:
            return False
        
        self.level += 1
        # Increase production by 25% per level
        for resource_type in self.produces:
            self.produces[resource_type] *= 1.25
        
        # Increase upkeep by 20% per level
        for resource_type in self.upkeep_costs:
            self.upkeep_costs[resource_type] *= 1.20
        
        # Increase stability cost slightly
        self.stability_cost *= 1.15
        
        return True


@dataclass
class PlanetState:
    """
    Represents the current state of a planet's economy.
    """
    name: str
    
    # Resource stockpiles
    resources: Dict[ResourceType, float] = field(default_factory=lambda: {
        ResourceType.FOOD: 1000.0,
        ResourceType.METALS: 500.0,
        ResourceType.RARE_MINERALS: 100.0,
        ResourceType.ENERGY: 500.0,
        ResourceType.MANUFACTURED_GOODS: 200.0
    })
    
    # Buildings
    buildings: List[ProductionBuilding] = field(default_factory=list)
    
    # Planet stability (0-100, below 30 is critical)
    stability: float = 100.0
    
    # Population (affects resource consumption)
    population: int = 1000
    
    # Economic health metrics
    debt: float = 0.0
    expansion_rate: float = 0.0  # buildings added per turn
    
    # Counters
    turn: int = 0
    
    def add_resource(self, resource_type: ResourceType, amount: float):
        """Add resources to stockpile."""
        self.resources[resource_type] = self.resources.get(resource_type, 0) + amount
    
    def remove_resource(self, resource_type: ResourceType, amount: float) -> bool:
        """Remove resources from stockpile. Returns False if insufficient."""
        current = self.resources.get(resource_type, 0)
        if current >= amount:
            self.resources[resource_type] = current - amount
            return True
        return False
    
    def has_resources(self, costs: Dict[ResourceType, float]) -> bool:
        """Check if planet has enough resources."""
        for resource_type, amount in costs.items():
            if self.resources.get(resource_type, 0) < amount:
                return False
        return True
    
    def calculate_stability(self) -> float:
        """
        Calculate planet stability based on various factors.
        Stability ranges from 0 (collapsed) to 100 (perfect).
        """
        stability = 100.0
        
        # Building strain
        total_strain = sum(b.stability_cost for b in self.buildings)
        stability -= total_strain
        
        # Resource shortages
        for resource_type in ResourceType:
            amount = self.resources.get(resource_type, 0)
            if amount < 0:
                # Negative resources (debt) severely impact stability
                stability += amount * 0.1  # Each negative unit reduces stability
        
        # Debt impact
        if self.debt > 0:
            debt_penalty = min(30, self.debt * 0.01)
            stability -= debt_penalty
        
        # Rapid expansion penalty
        if self.expansion_rate > 5:
            expansion_penalty = (self.expansion_rate - 5) * 2
            stability -= expansion_penalty
        
        # Population pressure
        food_per_capita = self.resources.get(ResourceType.FOOD, 0) / max(1, self.population)
        if food_per_capita < 1.0:
            stability -= (1.0 - food_per_capita) * 20
        
        # Clamp between 0 and 100
        return max(0.0, min(100.0, stability))
    
    def apply_stability_effects(self):
        """Apply effects based on current stability."""
        self.stability = self.calculate_stability()
        
        # Low stability causes problems
        if self.stability < 30:
            # Critical instability: production efficiency drops
            for building in self.buildings:
                building.production_efficiency = 0.5
        elif self.stability < 50:
            # Moderate instability: slight production drops
            for building in self.buildings:
                building.production_efficiency = 0.75
        elif self.stability < 70:
            # Minor instability
            for building in self.buildings:
                building.production_efficiency = 0.9
        else:
            # Stable: full production
            for building in self.buildings:
                building.production_efficiency = 1.0
        
        # Very high stability gives bonuses
        if self.stability > 90:
            for building in self.buildings:
                building.production_efficiency = 1.1
    
    def process_turn(self):
        """Process one turn of the economy."""
        self.turn += 1
        
        # Calculate and apply stability effects
        self.apply_stability_effects()
        
        # Process all buildings
        for building in self.buildings:
            net_production = building.get_net_production()
            
            # Apply production
            for resource_type, amount in net_production.items():
                self.add_resource(resource_type, amount)
            
            # Random events based on risk factor
            import random
            if random.random() < building.risk_factor:
                # Building failure - no production this turn
                building.production_efficiency *= 0.5
        
        # Population consumption
        food_consumption = self.population * 0.5  # 0.5 food per person per turn
        self.remove_resource(ResourceType.FOOD, food_consumption)
        
        # Energy consumption
        energy_consumption = len(self.buildings) * 10  # Base energy per building
        self.remove_resource(ResourceType.ENERGY, energy_consumption)
        
        # Update expansion rate (decays over time)
        self.expansion_rate *= 0.8
    
    def construct_building(self, building: ProductionBuilding) -> tuple[bool, str]:
        """
        Attempt to construct a building.
        Returns (success, message).
        """
        # Check if we have resources
        if not self.has_resources(building.construction_costs):
            return False, "Insufficient resources"
        
        # Calculate impact on stability
        new_stability = self.calculate_stability() - building.stability_cost
        
        # Warn about risky expansion
        if new_stability < 30:
            return False, "Construction would critically destabilize planet"
        
        # Deduct construction costs
        for resource_type, amount in building.construction_costs.items():
            self.remove_resource(resource_type, amount)
        
        # Add building
        self.buildings.append(building)
        
        # Update expansion rate
        self.expansion_rate += 1
        
        return True, f"Successfully constructed {building.name}"
    
    def get_economic_report(self) -> Dict:
        """Generate a comprehensive economic report."""
        report = {
            "turn": self.turn,
            "stability": self.stability,
            "population": self.population,
            "resources": {rt.value: self.resources.get(rt, 0) for rt in ResourceType},
            "buildings": len(self.buildings),
            "expansion_rate": self.expansion_rate,
            "debt": self.debt,
        }
        
        # Calculate net production
        net_production = {}
        for building in self.buildings:
            for resource_type, amount in building.get_net_production().items():
                net_production[resource_type] = net_production.get(resource_type, 0) + amount
        
        report["net_production"] = {rt.value: net_production.get(rt, 0) for rt in ResourceType}
        
        return report


# Building templates - create instances of these for construction
BUILDING_TEMPLATES = {
    BuildingType.FARM: ProductionBuilding(
        type=BuildingType.FARM,
        name="Farm",
        description="Basic food production facility",
        construction_costs={
            ResourceType.METALS: 100,
            ResourceType.MANUFACTURED_GOODS: 50,
        },
        construction_time=2,
        produces={
            ResourceType.FOOD: 50,
        },
        upkeep_costs={
            ResourceType.ENERGY: 5,
        },
        stability_cost=1.0,
        risk_factor=0.01,
    ),
    
    BuildingType.HYDROPONICS_BAY: ProductionBuilding(
        type=BuildingType.HYDROPONICS_BAY,
        name="Hydroponics Bay",
        description="Advanced food production with higher output but higher upkeep",
        construction_costs={
            ResourceType.METALS: 300,
            ResourceType.RARE_MINERALS: 50,
            ResourceType.MANUFACTURED_GOODS: 150,
        },
        construction_time=4,
        produces={
            ResourceType.FOOD: 150,
        },
        upkeep_costs={
            ResourceType.ENERGY: 20,
            ResourceType.RARE_MINERALS: 2,
        },
        stability_cost=2.5,
        risk_factor=0.05,
    ),
    
    BuildingType.MINE: ProductionBuilding(
        type=BuildingType.MINE,
        name="Mine",
        description="Extracts metals from the planet",
        construction_costs={
            ResourceType.METALS: 150,
            ResourceType.MANUFACTURED_GOODS: 100,
        },
        construction_time=3,
        produces={
            ResourceType.METALS: 40,
        },
        upkeep_costs={
            ResourceType.ENERGY: 10,
            ResourceType.FOOD: 5,  # Workers need food
        },
        stability_cost=2.0,
        risk_factor=0.03,
    ),
    
    BuildingType.AUTOMATED_MINE: ProductionBuilding(
        type=BuildingType.AUTOMATED_MINE,
        name="Automated Mine",
        description="Advanced mining facility with automated systems",
        construction_costs={
            ResourceType.METALS: 400,
            ResourceType.RARE_MINERALS: 100,
            ResourceType.MANUFACTURED_GOODS: 300,
        },
        construction_time=5,
        produces={
            ResourceType.METALS: 120,
        },
        upkeep_costs={
            ResourceType.ENERGY: 30,
            ResourceType.MANUFACTURED_GOODS: 5,
        },
        stability_cost=4.0,
        risk_factor=0.08,
    ),
    
    BuildingType.QUARRY: ProductionBuilding(
        type=BuildingType.QUARRY,
        name="Quarry",
        description="Extracts rare minerals",
        construction_costs={
            ResourceType.METALS: 200,
            ResourceType.MANUFACTURED_GOODS: 150,
        },
        construction_time=4,
        produces={
            ResourceType.RARE_MINERALS: 15,
        },
        upkeep_costs={
            ResourceType.ENERGY: 15,
            ResourceType.FOOD: 8,
        },
        stability_cost=3.0,
        risk_factor=0.05,
    ),
    
    BuildingType.DEEP_CORE_EXTRACTOR: ProductionBuilding(
        type=BuildingType.DEEP_CORE_EXTRACTOR,
        name="Deep Core Extractor",
        description="High-risk, high-reward rare mineral extraction",
        construction_costs={
            ResourceType.METALS: 500,
            ResourceType.RARE_MINERALS: 150,
            ResourceType.MANUFACTURED_GOODS: 400,
        },
        construction_time=6,
        produces={
            ResourceType.RARE_MINERALS: 60,
        },
        upkeep_costs={
            ResourceType.ENERGY: 40,
            ResourceType.MANUFACTURED_GOODS: 10,
        },
        stability_cost=8.0,
        risk_factor=0.15,  # High risk of failure
    ),
    
    BuildingType.POWER_PLANT: ProductionBuilding(
        type=BuildingType.POWER_PLANT,
        name="Power Plant",
        description="Generates energy for the colony",
        construction_costs={
            ResourceType.METALS: 250,
            ResourceType.MANUFACTURED_GOODS: 200,
        },
        construction_time=4,
        produces={
            ResourceType.ENERGY: 100,
        },
        upkeep_costs={
            ResourceType.METALS: 5,
        },
        stability_cost=2.5,
        risk_factor=0.04,
    ),
    
    BuildingType.FUSION_REACTOR: ProductionBuilding(
        type=BuildingType.FUSION_REACTOR,
        name="Fusion Reactor",
        description="Advanced energy generation with minimal upkeep",
        construction_costs={
            ResourceType.METALS: 600,
            ResourceType.RARE_MINERALS: 200,
            ResourceType.MANUFACTURED_GOODS: 500,
        },
        construction_time=8,
        produces={
            ResourceType.ENERGY: 400,
        },
        upkeep_costs={
            ResourceType.RARE_MINERALS: 5,
        },
        stability_cost=6.0,
        risk_factor=0.12,  # Moderate-high risk
    ),
    
    BuildingType.FACTORY: ProductionBuilding(
        type=BuildingType.FACTORY,
        name="Factory",
        description="Produces manufactured goods",
        construction_costs={
            ResourceType.METALS: 300,
            ResourceType.MANUFACTURED_GOODS: 100,
        },
        construction_time=5,
        produces={
            ResourceType.MANUFACTURED_GOODS: 30,
        },
        upkeep_costs={
            ResourceType.ENERGY: 20,
            ResourceType.METALS: 10,
            ResourceType.FOOD: 5,
        },
        stability_cost=3.0,
        risk_factor=0.04,
    ),
    
    BuildingType.ADVANCED_FACTORY: ProductionBuilding(
        type=BuildingType.ADVANCED_FACTORY,
        name="Advanced Factory",
        description="High-tech manufacturing facility",
        construction_costs={
            ResourceType.METALS: 700,
            ResourceType.RARE_MINERALS: 150,
            ResourceType.MANUFACTURED_GOODS: 300,
        },
        construction_time=7,
        produces={
            ResourceType.MANUFACTURED_GOODS: 100,
        },
        upkeep_costs={
            ResourceType.ENERGY: 50,
            ResourceType.METALS: 25,
            ResourceType.RARE_MINERALS: 5,
        },
        stability_cost=5.0,
        risk_factor=0.08,
    ),
}


def create_building(building_type: BuildingType) -> ProductionBuilding:
    """Create a new building instance from a template."""
    import copy
    return copy.deepcopy(BUILDING_TEMPLATES[building_type])


class EconomyManager:
    """
    Manager class for the entire planetary economy.
    Provides helper methods for common operations.
    """
    
    def __init__(self, planet: PlanetState):
        self.planet = planet
        self.history: List[Dict] = []
    
    def simulate_construction(self, building_type: BuildingType) -> Dict:
        """
        Simulate what would happen if we constructed a building.
        Returns projected impact without actually building.
        """
        building = create_building(building_type)
        
        # Check current state
        current_stability = self.planet.calculate_stability()
        current_resources = dict(self.planet.resources)
        
        # Calculate projected state
        projected_resources = dict(current_resources)
        can_afford = True
        
        for resource_type, cost in building.construction_costs.items():
            projected_resources[resource_type] = projected_resources.get(resource_type, 0) - cost
            if projected_resources[resource_type] < 0:
                can_afford = False
        
        projected_stability = current_stability - building.stability_cost
        
        # Calculate payback period
        net_production = building.get_net_production()
        construction_cost = building.get_total_construction_cost()
        
        # Estimate turns to recoup investment
        total_value_per_turn = sum(
            amount * (2.0 if rt == ResourceType.RARE_MINERALS else 1.0)
            for rt, amount in net_production.items()
        )
        
        payback_turns = construction_cost / max(0.1, total_value_per_turn) if total_value_per_turn > 0 else float('inf')
        
        return {
            "can_afford": can_afford,
            "current_stability": current_stability,
            "projected_stability": projected_stability,
            "stability_change": projected_stability - current_stability,
            "net_production": {rt.value: net_production.get(rt, 0) for rt in ResourceType},
            "payback_turns": payback_turns,
            "risk_assessment": self._assess_risk(projected_stability, building),
            "recommendation": self._get_recommendation(
                can_afford, projected_stability, payback_turns, building
            )
        }
    
    def _assess_risk(self, projected_stability: float, building: ProductionBuilding) -> str:
        """Assess risk level of construction."""
        if projected_stability < 30:
            return "CRITICAL - Will destabilize planet"
        elif projected_stability < 50:
            return "HIGH - Significant stability risk"
        elif projected_stability < 70:
            return "MODERATE - Some stability concerns"
        elif building.risk_factor > 0.1:
            return "MODERATE - High building failure risk"
        else:
            return "LOW - Safe expansion"
    
    def _get_recommendation(
        self, can_afford: bool, projected_stability: float,
        payback_turns: float, building: ProductionBuilding
    ) -> str:
        """Get construction recommendation."""
        if not can_afford:
            return "DO NOT BUILD - Insufficient resources"
        
        if projected_stability < 30:
            return "DO NOT BUILD - Too destabilizing"
        
        if projected_stability < 50 and building.risk_factor > 0.1:
            return "CAUTION - Wait for better stability"
        
        if payback_turns < 10:
            return "RECOMMENDED - Quick return on investment"
        elif payback_turns < 20:
            return "CONSIDER - Reasonable payback period"
        else:
            return "WAIT - Long payback period, consider alternatives"
    
    def get_optimal_build_order(self, turns: int = 10) -> List[BuildingType]:
        """
        Suggest an optimal build order for the next N turns.
        Uses a simple greedy algorithm considering payback and stability.
        """
        build_order = []
        
        # Create a temporary copy to simulate
        import copy
        temp_planet = copy.deepcopy(self.planet)
        
        for _ in range(turns):
            best_building = None
            best_score = -1
            
            # Evaluate each building type
            for building_type in BuildingType:
                building = create_building(building_type)
                
                # Check if we can afford and build safely
                if not temp_planet.has_resources(building.construction_costs):
                    continue
                
                projected_stability = temp_planet.calculate_stability() - building.stability_cost
                if projected_stability < 40:  # Safety threshold
                    continue
                
                # Score based on net value and payback
                net_production = building.get_net_production()
                value_per_turn = sum(
                    amount * (2.0 if rt == ResourceType.RARE_MINERALS else 1.0)
                    for rt, amount in net_production.items()
                )
                
                # Penalize high risk
                risk_penalty = building.risk_factor * 10
                
                score = value_per_turn - risk_penalty
                
                if score > best_score:
                    best_score = score
                    best_building = building_type
            
            if best_building:
                build_order.append(best_building)
                # Simulate construction
                building = create_building(best_building)
                for rt, cost in building.construction_costs.items():
                    temp_planet.remove_resource(rt, cost)
                temp_planet.buildings.append(building)
                temp_planet.process_turn()
            else:
                # Can't build anything, just process turn
                temp_planet.process_turn()
        
        return build_order
    
    def record_turn(self):
        """Record current turn to history."""
        self.history.append(self.planet.get_economic_report())
    
    def get_economic_trends(self, turns: int = 10) -> Dict:
        """Analyze economic trends over the last N turns."""
        if len(self.history) < 2:
            return {"error": "Insufficient history"}
        
        recent = self.history[-turns:]
        
        trends = {
            "stability_trend": recent[-1]["stability"] - recent[0]["stability"],
            "building_growth": recent[-1]["buildings"] - recent[0]["buildings"],
        }
        
        # Resource trends
        for resource_type in ResourceType:
            key = resource_type.value
            start = recent[0]["resources"].get(key, 0)
            end = recent[-1]["resources"].get(key, 0)
            trends[f"{key}_trend"] = end - start
        
        return trends
