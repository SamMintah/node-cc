const launches = new Map();

const launch = {
    flightNumber:100,
    mission: "kepler Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("Decembeer 27, 2090"),
    destination:"Kepler-442 b",
    customers :["ZTM","KSM",'NASA'],
    upcoming: true,
    success: true
} 

launches.set(launch.flightNumber, launch);

module.exports ={
    launches
}