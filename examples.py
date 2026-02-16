"""
Example usage and scenarios for the Genesis Frontier Resource Economy System.
Run this file to see the economy system in action.
"""

from resource_economy import (
    PlanetState, EconomyManager, BuildingType, ResourceType,
    create_building, BUILDING_TEMPLATES
)


def print_separator(title=""):
    """Print a visual separator."""
    print("\n" + "=" * 80)
    if title:
        print(f" {title}")
        print("=" * 80)
    print()


def print_planet_status(planet: PlanetState, detailed=False):
    """Print current planet status."""
    report = planet.get_economic_report()
    
    print(f"🌍 Planet: {planet.name}")
    print(f"📅 Turn: {report['turn']}")
    print(f"⚖️  Stability: {report['stability']:.1f}/100", end="")
    
    if report['stability'] > 80:
        print(" ✅ EXCELLENT")
    elif report['stability'] > 60:
        print(" ✓ STABLE")
    elif report['stability'] > 40:
        print(" ⚠️  UNSTABLE")
    elif report['stability'] > 30:
        print(" ❗ CRITICAL")
    else:
        print(" 💀 COLLAPSING")
    
    print(f"👥 Population: {report['population']:,}")
    print(f"🏗️  Buildings: {report['buildings']}")
    
    print("\n📦 Resources:")
    for resource_name, amount in report['resources'].items():
        icon = {
            'food': '🌾',
            'metals': '⚙️',
            'rare_minerals': '💎',
            'energy': '⚡',
            'manufactured_goods': '🏭'
        }.get(resource_name, '📦')
        print(f"  {icon} {resource_name:20s}: {amount:>8.1f}")
    
    if detailed:
        print("\n📊 Net Production (per turn):")
        for resource_name, amount in report['net_production'].items():
            if amount != 0:
                sign = "+" if amount > 0 else ""
                print(f"  {resource_name:20s}: {sign}{amount:.1f}")


def scenario_1_tutorial():
    """Scenario 1: Tutorial - Basic Colony Setup"""
    print_separator("SCENARIO 1: Tutorial - Setting Up Your First Colony")
    
    planet = PlanetState(name="Genesis Alpha")
    manager = EconomyManager(planet)
    
    print("Welcome to Genesis Alpha! You have 1,000 colonists and basic resources.")
    print("Let's build a sustainable colony.")
    
    print_planet_status(planet)
    
    # Turn 1: Build a farm
    print_separator("Turn 1: Building a Farm")
    print("First, we need food production. Let's check if we can build a farm...")
    
    simulation = manager.simulate_construction(BuildingType.FARM)
    print(f"\n🔍 Construction Simulation:")
    print(f"  Can Afford: {simulation['can_afford']}")
    print(f"  Stability: {simulation['current_stability']:.1f} → {simulation['projected_stability']:.1f}")
    print(f"  Risk: {simulation['risk_assessment']}")
    print(f"  Payback: {simulation['payback_turns']:.1f} turns")
    print(f"  💡 {simulation['recommendation']}")
    
    farm = create_building(BuildingType.FARM)
    success, message = planet.construct_building(farm)
    print(f"\n✅ {message}" if success else f"\n❌ {message}")
    
    planet.process_turn()
    manager.record_turn()
    print_planet_status(planet)
    
    # Turn 2: Build power plant
    print_separator("Turn 2: Building a Power Plant")
    print("We need energy to power our facilities...")
    
    power_plant = create_building(BuildingType.POWER_PLANT)
    success, message = planet.construct_building(power_plant)
    print(f"✅ {message}" if success else f"❌ {message}")
    
    planet.process_turn()
    manager.record_turn()
    print_planet_status(planet)
    
    # Turn 3: Build mine
    print_separator("Turn 3: Building a Mine")
    mine = create_building(BuildingType.MINE)
    success, message = planet.construct_building(mine)
    print(f"✅ {message}" if success else f"❌ {message}")
    
    planet.process_turn()
    manager.record_turn()
    print_planet_status(planet, detailed=True)
    
    print("\n🎓 Tutorial Complete!")
    print("You now have basic food, energy, and metal production.")
    print("Continue building carefully to maintain stability!")


def scenario_2_rapid_expansion():
    """Scenario 2: The Dangers of Rapid Expansion"""
    print_separator("SCENARIO 2: The Perils of Rapid Expansion")
    
    planet = PlanetState(name="Expansion Prime")
    manager = EconomyManager(planet)
    
    # Give them extra resources
    planet.resources[ResourceType.METALS] = 2000
    planet.resources[ResourceType.MANUFACTURED_GOODS] = 1000
    
    print("Expansion Prime has abundant resources. A governor decides to build rapidly...")
    print_planet_status(planet)
    
    # Build 5 buildings in quick succession
    buildings_to_build = [
        BuildingType.FARM,
        BuildingType.POWER_PLANT,
        BuildingType.MINE,
        BuildingType.FACTORY,
        BuildingType.QUARRY,
    ]
    
    for i, building_type in enumerate(buildings_to_build, 1):
        print_separator(f"Turn {i}: Building {building_type.value}")
        
        building = create_building(building_type)
        success, message = planet.construct_building(building)
        print(f"{'✅' if success else '❌'} {message}")
        
        planet.process_turn()
        manager.record_turn()
        
        print(f"\n📊 After construction:")
        print(f"  Stability: {planet.stability:.1f}/100")
        print(f"  Expansion Rate: {planet.expansion_rate:.2f}")
        
        if planet.stability < 50:
            print("  ⚠️  WARNING: Planet becoming unstable!")
        if planet.stability < 30:
            print("  💀 CRITICAL: Planet stability critical!")
    
    print_separator("Final State After Rapid Expansion")
    print_planet_status(planet, detailed=True)
    
    print("\n⚠️  LESSON LEARNED:")
    print("Rapid expansion (>5 buildings quickly) severely destabilizes planets.")
    print("Build gradually and let stability recover between projects!")


def scenario_3_risk_vs_reward():
    """Scenario 3: Risk vs. Reward - Deep Core Extractor"""
    print_separator("SCENARIO 3: High Risk, High Reward - Deep Core Extractor")
    
    # Setup a mature colony
    planet = PlanetState(name="Risk Taker's Paradise")
    planet.resources[ResourceType.METALS] = 1500
    planet.resources[ResourceType.RARE_MINERALS] = 500
    planet.resources[ResourceType.MANUFACTURED_GOODS] = 1000
    planet.resources[ResourceType.ENERGY] = 1000
    
    # Add some stable infrastructure
    planet.buildings = [
        create_building(BuildingType.FARM),
        create_building(BuildingType.FARM),
        create_building(BuildingType.POWER_PLANT),
        create_building(BuildingType.POWER_PLANT),
        create_building(BuildingType.MINE),
    ]
    
    manager = EconomyManager(planet)
    
    print("You have a stable colony with good infrastructure.")
    print("Should you build a Deep Core Extractor?")
    print_planet_status(planet)
    
    print_separator("Analyzing Deep Core Extractor")
    
    simulation = manager.simulate_construction(BuildingType.DEEP_CORE_EXTRACTOR)
    print("🔍 Construction Analysis:")
    print(f"  Can Afford: {simulation['can_afford']}")
    print(f"  Current Stability: {simulation['current_stability']:.1f}")
    print(f"  Projected Stability: {simulation['projected_stability']:.1f}")
    print(f"  Change: {simulation['stability_change']:.1f}")
    print(f"  Payback Period: {simulation['payback_turns']:.1f} turns")
    print(f"  Risk Level: {simulation['risk_assessment']}")
    print(f"  💡 Recommendation: {simulation['recommendation']}")
    
    extractor_template = BUILDING_TEMPLATES[BuildingType.DEEP_CORE_EXTRACTOR]
    print(f"\n⚙️  Building Stats:")
    print(f"  Production: {extractor_template.produces[ResourceType.RARE_MINERALS]} Rare Minerals/turn")
    print(f"  Stability Cost: {extractor_template.stability_cost}")
    print(f"  Failure Risk: {extractor_template.risk_factor * 100:.0f}%")
    
    # Build it
    print_separator("Building the Deep Core Extractor")
    extractor = create_building(BuildingType.DEEP_CORE_EXTRACTOR)
    success, message = planet.construct_building(extractor)
    print(f"✅ {message}" if success else f"❌ {message}")
    
    # Simulate several turns
    print_separator("Operating the Deep Core Extractor (10 turns)")
    
    failures = 0
    for turn in range(1, 11):
        planet.process_turn()
        manager.record_turn()
        
        # Check if extractor failed
        if planet.buildings[-1].production_efficiency < 1.0:
            failures += 1
            print(f"Turn {turn}: ❌ Extractor failed! Operating at 50% efficiency")
        else:
            print(f"Turn {turn}: ✅ Extractor operational")
        
        if turn % 5 == 0:
            print(f"  Stability: {planet.stability:.1f}, Rare Minerals: {planet.resources[ResourceType.RARE_MINERALS]:.1f}")
    
    print_planet_status(planet, detailed=True)
    
    print(f"\n📊 Results:")
    print(f"  Failures in 10 turns: {failures}")
    print(f"  Expected failures: ~{extractor_template.risk_factor * 10:.1f}")
    print(f"  High risk = high reward, but also high chance of problems!")


def scenario_4_stability_collapse():
    """Scenario 4: Planet Stability Collapse"""
    print_separator("SCENARIO 4: What Happens When a Planet Collapses")
    
    planet = PlanetState(name="Doomed Colony")
    planet.resources[ResourceType.FOOD] = 100  # Very low food
    planet.resources[ResourceType.ENERGY] = 100  # Low energy
    planet.debt = 1000  # High debt
    
    # Overbuilt with expensive buildings
    planet.buildings = [
        create_building(BuildingType.DEEP_CORE_EXTRACTOR),
        create_building(BuildingType.FUSION_REACTOR),
        create_building(BuildingType.ADVANCED_FACTORY),
        create_building(BuildingType.AUTOMATED_MINE),
        create_building(BuildingType.HYDROPONICS_BAY),
    ]
    
    manager = EconomyManager(planet)
    
    print("Doomed Colony expanded too aggressively with advanced buildings.")
    print("They ran into debt and resource shortages...")
    print_planet_status(planet)
    
    print("\n⚠️  DANGER SIGNS:")
    print(f"  - Stability: {planet.stability:.1f} (CRITICAL)")
    print(f"  - Debt: {planet.debt:.0f}")
    print(f"  - Food shortfall incoming")
    print(f"  - High-maintenance buildings")
    
    # Simulate the collapse
    print_separator("Simulating 5 turns...")
    
    for turn in range(1, 6):
        planet.process_turn()
        manager.record_turn()
        
        print(f"\nTurn {turn}:")
        print(f"  Stability: {planet.stability:.1f}/100")
        print(f"  Food: {planet.resources[ResourceType.FOOD]:.1f}")
        print(f"  Energy: {planet.resources[ResourceType.ENERGY]:.1f}")
        
        # Check efficiency
        avg_efficiency = sum(b.production_efficiency for b in planet.buildings) / len(planet.buildings)
        print(f"  Avg Production Efficiency: {avg_efficiency * 100:.0f}%")
        
        if planet.stability < 30:
            print("  💀 COLLAPSE: Production at 50% efficiency!")
        elif planet.stability < 50:
            print("  ❗ CRITICAL: Production at 75% efficiency!")
    
    print_planet_status(planet, detailed=True)
    
    print("\n💀 COLONY STATUS: COLLAPSED")
    print("Lessons:")
    print("  - Don't build beyond your means")
    print("  - Avoid debt")
    print("  - Ensure resource security before expanding")
    print("  - Advanced buildings require strong economy")


def scenario_5_optimal_strategy():
    """Scenario 5: Optimal Growth Strategy"""
    print_separator("SCENARIO 5: Optimal Growth Strategy")
    
    planet = PlanetState(name="Prosperity")
    manager = EconomyManager(planet)
    
    print("Prosperity follows best practices for planetary development.")
    print_planet_status(planet)
    
    # Get optimal build order
    print_separator("Planning Phase: Get Optimal Build Order")
    optimal_order = manager.get_optimal_build_order(turns=10)
    
    print("🎯 Recommended Build Order (next 10 turns):")
    for i, building_type in enumerate(optimal_order, 1):
        print(f"  {i}. {building_type.value}")
    
    # Execute the plan
    print_separator("Execution Phase: Following the Plan")
    
    for turn, building_type in enumerate(optimal_order, 1):
        print(f"\nTurn {turn}: Building {building_type.value}")
        
        # Simulate first
        simulation = manager.simulate_construction(building_type)
        print(f"  Pre-check: {simulation['recommendation']}")
        
        building = create_building(building_type)
        success, message = planet.construct_building(building)
        
        if success:
            print(f"  ✅ {message}")
        else:
            print(f"  ❌ {message} - Skipping")
        
        planet.process_turn()
        manager.record_turn()
        
        if turn % 3 == 0:
            print(f"  📊 Stability: {planet.stability:.1f}, Buildings: {len(planet.buildings)}")
    
    print_separator("Final Results")
    print_planet_status(planet, detailed=True)
    
    trends = manager.get_economic_trends(turns=10)
    print("\n📈 Economic Trends (last 10 turns):")
    print(f"  Stability Change: {trends['stability_trend']:+.1f}")
    print(f"  Buildings Added: {trends['building_growth']}")
    for resource in ResourceType:
        key = f"{resource.value}_trend"
        if key in trends:
            print(f"  {resource.value}: {trends[key]:+.1f}")
    
    print("\n🎉 SUCCESS!")
    print("Following optimal strategies leads to sustainable growth!")


def main():
    """Run all example scenarios."""
    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║                    GENESIS FRONTIER - ECONOMY SYSTEM                         ║
║                         Example Scenarios                                    ║
╚══════════════════════════════════════════════════════════════════════════════╝
    """)
    
    scenarios = [
        ("1", "Tutorial - Basic Colony Setup", scenario_1_tutorial),
        ("2", "The Perils of Rapid Expansion", scenario_2_rapid_expansion),
        ("3", "High Risk, High Reward", scenario_3_risk_vs_reward),
        ("4", "Planet Stability Collapse", scenario_4_stability_collapse),
        ("5", "Optimal Growth Strategy", scenario_5_optimal_strategy),
    ]
    
    print("Available scenarios:")
    for num, title, _ in scenarios:
        print(f"  {num}. {title}")
    print("  A. Run all scenarios")
    print("  Q. Quit")
    
    choice = input("\nSelect a scenario (1-5, A, or Q): ").strip().upper()
    
    if choice == 'Q':
        print("Goodbye!")
        return
    elif choice == 'A':
        for num, title, func in scenarios:
            func()
            input("\nPress Enter to continue to next scenario...")
    else:
        for num, title, func in scenarios:
            if choice == num:
                func()
                break
        else:
            print("Invalid choice. Running all scenarios...")
            for num, title, func in scenarios:
                func()
                input("\nPress Enter to continue to next scenario...")
    
    print_separator("All Scenarios Complete")
    print("Thank you for exploring the Genesis Frontier Economy System!")
    print("Read ECONOMY_GUIDE.md for detailed documentation.")


if __name__ == "__main__":
    main()
