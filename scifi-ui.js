// Genesis Frontier - Modern Sci-Fi UI JavaScript

// Global State
const gameState = {
    currentPlanet: null,
    planets: [],
    facilities: [],
    autoRotate: true,
    rotation: { x: 0, y: 0 },
    zoom: 1,
    solDay: 45,
    galaxyZoom: 1,
    galaxyOffset: { x: 0, y: 0 }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializePlanets();
    initializeFacilities();
    drawPlanet();
    drawGalaxy();
    startAnimations();
    updateAllUI();
});

// ===== PLANET INITIALIZATION =====

function initializePlanets() {
    gameState.planets = [
        {
            id: 1,
            name: 'Genesis Prime',
            type: 'Terraforming',
            color: '#4a9eff',
            atmosphere: 21,
            temperature: 15,
            water: 45,
            soil: 62,
            pollution: 18,
            population: 250,
            energy: 5000,
            credits: 10000
        },
        {
            id: 2,
            name: 'Nova Terra',
            type: 'Colony',
            color: '#66cc99',
            atmosphere: 18,
            temperature: 22,
            water: 35,
            soil: 48,
            pollution: 25,
            population: 180,
            energy: 3500,
            credits: 7500
        },
        {
            id: 3,
            name: 'Crimson Reach',
            type: 'Mining',
            color: '#cc6644',
            atmosphere: 12,
            temperature: 45,
            water: 15,
            soil: 30,
            pollution: 42,
            population: 95,
            energy: 2800,
            credits: 12000
        }
    ];
    
    gameState.currentPlanet = gameState.planets[0];
    renderPlanetList();
}

function renderPlanetList() {
    const container = document.getElementById('planet-list');
    container.innerHTML = '';
    
    gameState.planets.forEach(planet => {
        const card = document.createElement('div');
        card.className = `planet-preview ${planet.id === gameState.currentPlanet.id ? 'active' : ''}`;
        card.onclick = () => selectPlanet(planet.id);
        
        card.innerHTML = `
            <div class="planet-orb" style="background: radial-gradient(circle at 30% 30%, ${planet.color}, ${adjustColor(planet.color, -40)});"></div>
            <div class="planet-preview-info">
                <div class="planet-preview-name">${planet.name}</div>
                <div class="planet-preview-status">${planet.type} • ${planet.population} Pop</div>
                <div class="planet-quick-actions">
                    <button class="quick-action-btn" onclick="event.stopPropagation(); quickViewFacilities(${planet.id})">🏭</button>
                    <button class="quick-action-btn" onclick="event.stopPropagation(); quickViewStats(${planet.id})">📊</button>
                    <button class="quick-action-btn" onclick="event.stopPropagation(); quickViewDefense(${planet.id})">🛡️</button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function selectPlanet(planetId) {
    const planet = gameState.planets.find(p => p.id === planetId);
    if (planet) {
        gameState.currentPlanet = planet;
        renderPlanetList();
        updateAllUI();
        drawPlanet();
        showNotification('Planet Selected', `Switching to ${planet.name}`, 'success');
    }
}

// ===== FACILITY INITIALIZATION =====

function initializeFacilities() {
    gameState.facilities = [
        {
            id: 1,
            name: 'O₂ Generator Alpha',
            type: 'atmosphere',
            status: 'online',
            power: 85,
            energyConsumption: 450,
            output: 'O₂: +2.5%/hr'
        },
        {
            id: 2,
            name: 'Cooling Array 7',
            type: 'temperature',
            status: 'online',
            power: 70,
            energyConsumption: 380,
            output: 'Temp: -0.8°C/hr'
        },
        {
            id: 3,
            name: 'Water Extraction Plant',
            type: 'water',
            status: 'online',
            power: 95,
            energyConsumption: 520,
            output: 'H₂O: +1.2%/hr'
        },
        {
            id: 4,
            name: 'Soil Enrichment Station',
            type: 'soil',
            status: 'online',
            power: 60,
            energyConsumption: 290,
            output: 'Soil: +0.5%/hr'
        },
        {
            id: 5,
            name: 'Pollution Filter Complex',
            type: 'pollution',
            status: 'offline',
            power: 0,
            energyConsumption: 410,
            output: 'Pollution: -1.8 PPM/hr'
        }
    ];
    
    renderFacilitiesList();
}

function renderFacilitiesList() {
    const container = document.getElementById('facilities-list');
    container.innerHTML = '';
    
    gameState.facilities.forEach(facility => {
        const card = document.createElement('div');
        card.className = `facility-card ${facility.status === 'offline' ? 'offline' : ''}`;
        
        card.innerHTML = `
            <div class="facility-header">
                <div class="facility-name">${facility.name}</div>
                <div class="facility-status-badge ${facility.status}">${facility.status}</div>
            </div>
            <div class="facility-controls">
                <div class="facility-toggle">
                    <span class="toggle-label">Power</span>
                    <div class="toggle-switch ${facility.status === 'online' ? 'active' : ''}" 
                         onclick="toggleFacility(${facility.id})"></div>
                </div>
                <div class="slider-control">
                    <div class="slider-label-row">
                        <span>Output</span>
                        <span class="slider-value">${facility.power}%</span>
                    </div>
                    <div class="slider-track" onclick="updateFacilityPower(event, ${facility.id})">
                        <div class="slider-fill" style="width: ${facility.power}%"></div>
                        <div class="slider-thumb" style="left: ${facility.power}%"></div>
                    </div>
                </div>
            </div>
            <div class="facility-stats">
                <div class="stat-row">⚡ <span class="value">${facility.energyConsumption} kW</span></div>
                <div class="stat-row">📈 <span class="value">${facility.output}</span></div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function toggleFacility(facilityId) {
    const facility = gameState.facilities.find(f => f.id === facilityId);
    if (facility) {
        facility.status = facility.status === 'online' ? 'offline' : 'online';
        renderFacilitiesList();
        showNotification(
            'Facility Status Changed',
            `${facility.name} is now ${facility.status}`,
            facility.status === 'online' ? 'success' : 'warning'
        );
    }
}

function updateFacilityPower(event, facilityId) {
    const facility = gameState.facilities.find(f => f.id === facilityId);
    if (!facility || facility.status === 'offline') return;
    
    const track = event.currentTarget;
    const rect = track.getBoundingClientRect();
    const percent = Math.round(((event.clientX - rect.left) / rect.width) * 100);
    facility.power = Math.max(0, Math.min(100, percent));
    
    renderFacilitiesList();
}

// ===== PLANET VISUALIZATION =====

function drawPlanet() {
    const canvas = document.getElementById('planet-canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 250 * gameState.zoom;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw planet sphere with lighting
    const gradient = ctx.createRadialGradient(
        centerX - radius * 0.3, 
        centerY - radius * 0.3, 
        radius * 0.1,
        centerX, 
        centerY, 
        radius
    );
    
    const color = gameState.currentPlanet.color;
    gradient.addColorStop(0, adjustColor(color, 80));
    gradient.addColorStop(0.4, color);
    gradient.addColorStop(1, adjustColor(color, -60));
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw atmospheric glow
    ctx.shadowBlur = 40;
    ctx.shadowColor = color;
    ctx.strokeStyle = adjustColor(color, 40);
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 10, 0, Math.PI * 2);
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Draw continents (simplified)
    ctx.fillStyle = adjustColor(color, -30);
    drawContinent(ctx, centerX - 60, centerY - 80, 100, 60, gameState.rotation.y);
    drawContinent(ctx, centerX + 40, centerY + 20, 120, 80, gameState.rotation.y);
    drawContinent(ctx, centerX - 100, centerY + 60, 90, 50, gameState.rotation.y);
    
    // Draw clouds/atmosphere
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    drawCloud(ctx, centerX - 80, centerY - 40, 80, 30, gameState.rotation.y * 0.5);
    drawCloud(ctx, centerX + 50, centerY - 80, 100, 35, gameState.rotation.y * 0.5);
    
    // Update planet info
    document.getElementById('planet-name').textContent = gameState.currentPlanet.name;
    document.getElementById('planet-type').textContent = gameState.currentPlanet.type.toUpperCase();
    
    // Draw orbital markers
    updateOrbitalMarkers(centerX, centerY, radius);
}

function drawContinent(ctx, x, y, width, height, rotation) {
    ctx.save();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function drawCloud(ctx, x, y, width, height, rotation) {
    ctx.save();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate(rotation * Math.PI / 180);
    ctx.beginPath();
    ctx.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
}

function updateOrbitalMarkers(centerX, centerY, radius) {
    const container = document.getElementById('orbital-markers');
    container.innerHTML = '';
    
    const markers = [
        { icon: '🏭', angle: 45, distance: 1.2, label: 'Industrial Complex' },
        { icon: '🚀', angle: 135, distance: 1.3, label: 'Spaceport' },
        { icon: '⚡', angle: 225, distance: 1.25, label: 'Power Station' },
        { icon: '🛡️', angle: 315, distance: 1.35, label: 'Defense Grid' }
    ];
    
    markers.forEach(marker => {
        const angle = (marker.angle + gameState.rotation.y) * Math.PI / 180;
        const x = centerX + Math.cos(angle) * radius * marker.distance;
        const y = centerY + Math.sin(angle) * radius * marker.distance;
        
        const markerEl = document.createElement('div');
        markerEl.className = 'orbital-marker';
        markerEl.innerHTML = marker.icon;
        markerEl.style.left = `${x}px`;
        markerEl.style.top = `${y}px`;
        markerEl.title = marker.label;
        markerEl.style.animationDelay = `${marker.angle / 360}s`;
        
        container.appendChild(markerEl);
    });
}

// ===== GALAXY MAP =====

function drawGalaxy() {
    const canvas = document.getElementById('galaxy-canvas');
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars background
    for (let i = 0; i < 200; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8})`;
        ctx.fillRect(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            1, 1
        );
    }
    
    // Draw star systems
    const systems = generateStarSystems(50);
    
    systems.forEach((system, index) => {
        const x = system.x * gameState.galaxyZoom + gameState.galaxyOffset.x;
        const y = system.y * gameState.galaxyZoom + gameState.galaxyOffset.y;
        
        // Draw connections
        if (index > 0) {
            const prev = systems[index - 1];
            const prevX = prev.x * gameState.galaxyZoom + gameState.galaxyOffset.x;
            const prevY = prev.y * gameState.galaxyZoom + gameState.galaxyOffset.y;
            
            ctx.strokeStyle = 'rgba(0, 217, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
        
        // Draw system node
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 15);
        
        if (system.colonized) {
            gradient.addColorStop(0, '#00d9ff');
            gradient.addColorStop(1, 'rgba(0, 217, 255, 0)');
        } else if (system.discovered) {
            gradient.addColorStop(0, '#00ff88');
            gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
        } else {
            gradient.addColorStop(0, '#ffd700');
            gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw system border
        ctx.strokeStyle = system.colonized ? '#00d9ff' : (system.discovered ? '#00ff88' : '#ffd700');
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.stroke();
    });
}

function generateStarSystems(count) {
    const systems = [];
    for (let i = 0; i < count; i++) {
        systems.push({
            id: i + 1,
            name: `System ${i + 1}`,
            x: 100 + Math.random() * 1000,
            y: 100 + Math.random() * 600,
            discovered: i < 15,
            colonized: i < 3
        });
    }
    return systems;
}

// ===== TERRAFORMING DASHBOARD =====

function updateTerraformingDashboard() {
    const planet = gameState.currentPlanet;
    
    updateGauge('atmosphere', planet.atmosphere, 100);
    updateGauge('temperature', planet.temperature, 30);
    updateGauge('water', planet.water, 100);
    updateGauge('soil', planet.soil, 100);
    updateGauge('pollution', planet.pollution, 100);
    
    // Update statuses
    document.getElementById('atmosphere-status').textContent = 
        planet.atmosphere > 19 && planet.atmosphere < 23 ? 'Optimal' : 'Adjusting';
    document.getElementById('temperature-status').textContent = 
        planet.temperature > 10 && planet.temperature < 25 ? 'Optimal' : 'Regulating';
    document.getElementById('water-status').textContent = 
        planet.water > 60 ? 'Optimal' : 'Below Target';
    document.getElementById('soil-status').textContent = 
        planet.soil > 70 ? 'Excellent' : planet.soil > 50 ? 'Good' : 'Poor';
    document.getElementById('pollution-status').textContent = 
        planet.pollution < 20 ? 'Acceptable' : 'Warning';
}

function updateGauge(type, value, max) {
    const valueEl = document.getElementById(`${type}-value`);
    const progressEl = document.querySelector(`.${type}-progress`);
    
    if (valueEl) {
        valueEl.textContent = Math.round(value);
    }
    
    if (progressEl) {
        const circumference = 2 * Math.PI * 85;
        const progress = (value / max) * circumference;
        progressEl.style.strokeDashoffset = circumference - progress;
    }
}

// ===== ANIMATIONS =====

function startAnimations() {
    // Auto-rotate planet
    setInterval(() => {
        if (gameState.autoRotate) {
            gameState.rotation.y += 0.5;
            drawPlanet();
        }
    }, 50);
    
    // Update time
    setInterval(() => {
        gameState.solDay += 1;
        document.getElementById('sol-day').textContent = String(gameState.solDay).padStart(3, '0');
    }, 60000); // Every minute in real time = 1 day
    
    // Simulate resource changes
    setInterval(() => {
        if (gameState.currentPlanet) {
            simulateResourceChanges();
            updateAllUI();
        }
    }, 5000);
}

function simulateResourceChanges() {
    const planet = gameState.currentPlanet;
    const activeFacilities = gameState.facilities.filter(f => f.status === 'online');
    
    // Simulate atmosphere change
    planet.atmosphere += (Math.random() - 0.5) * 0.1;
    planet.atmosphere = Math.max(0, Math.min(100, planet.atmosphere));
    
    // Simulate temperature change
    planet.temperature += (Math.random() - 0.5) * 0.2;
    planet.temperature = Math.max(-50, Math.min(60, planet.temperature));
    
    // Energy consumption
    const energyUsed = activeFacilities.reduce((sum, f) => sum + f.energyConsumption * (f.power / 100), 0);
    planet.energy -= energyUsed / 100;
    planet.energy = Math.max(0, planet.energy);
}

// ===== CONTROL FUNCTIONS =====

function resetRotation() {
    gameState.rotation = { x: 0, y: 0 };
    gameState.zoom = 1;
    drawPlanet();
}

function zoomIn() {
    gameState.zoom = Math.min(gameState.zoom + 0.1, 2);
    drawPlanet();
}

function zoomOut() {
    gameState.zoom = Math.max(gameState.zoom - 0.1, 0.5);
    drawPlanet();
}

function toggleAutoRotate() {
    gameState.autoRotate = !gameState.autoRotate;
    document.getElementById('rotate-icon').textContent = gameState.autoRotate ? '⏸' : '▶';
}

function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    panel.classList.toggle('collapsed');
}

function openGalaxyMap() {
    document.getElementById('galaxy-modal').classList.add('active');
    drawGalaxy();
}

function closeGalaxyMap() {
    document.getElementById('galaxy-modal').classList.remove('active');
}

function galaxyZoomIn() {
    gameState.galaxyZoom = Math.min(gameState.galaxyZoom + 0.2, 3);
    drawGalaxy();
}

function galaxyZoomOut() {
    gameState.galaxyZoom = Math.max(gameState.galaxyZoom - 0.2, 0.5);
    drawGalaxy();
}

function resetGalaxyView() {
    gameState.galaxyZoom = 1;
    gameState.galaxyOffset = { x: 0, y: 0 };
    drawGalaxy();
}

// ===== UI UPDATES =====

function updateAllUI() {
    const planet = gameState.currentPlanet;
    
    // Update header stats
    document.getElementById('header-energy').textContent = Math.round(planet.energy);
    document.getElementById('header-credits').textContent = Math.round(planet.credits);
    document.getElementById('header-population').textContent = planet.population;
    
    // Update terraforming dashboard
    updateTerraformingDashboard();
}

// ===== NOTIFICATIONS =====

function showNotification(title, message, type = 'info') {
    const container = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    notification.innerHTML = `
        <div class="notification-title">${title}</div>
        <div class="notification-message">${message}</div>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ===== UTILITY FUNCTIONS =====

function adjustColor(color, amount) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, Math.min(255, (num >> 16) + amount));
    const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
    const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

// Quick action functions
function quickViewFacilities(planetId) {
    showNotification('Facilities', `Viewing facilities for planet ${planetId}`, 'info');
}

function quickViewStats(planetId) {
    showNotification('Statistics', `Viewing stats for planet ${planetId}`, 'info');
}

function quickViewDefense(planetId) {
    showNotification('Defense', `Viewing defenses for planet ${planetId}`, 'info');
}

function showResearch() {
    showNotification('Research', 'Research panel coming soon!', 'info');
}

function showFleet() {
    showNotification('Fleet', 'Fleet management coming soon!', 'info');
}

// Mouse interactions for planet rotation
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;

const canvas = document.getElementById('planet-canvas');
if (canvas) {
    canvas.addEventListener('mousedown', (e) => {
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        gameState.autoRotate = false;
        document.getElementById('rotate-icon').textContent = '▶';
    });
    
    canvas.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const deltaX = e.clientX - lastMouseX;
            const deltaY = e.clientY - lastMouseY;
            
            gameState.rotation.y += deltaX * 0.5;
            gameState.rotation.x += deltaY * 0.5;
            
            lastMouseX = e.clientX;
            lastMouseY = e.clientY;
            
            drawPlanet();
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    canvas.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    });
}
