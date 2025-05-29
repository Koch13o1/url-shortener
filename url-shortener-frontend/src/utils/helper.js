import { subDomainList } from "./constant";

export const getApps = () => {
    console.log("#",window.location.hostname )
    const subdomain = getSubDomain(window.location.hostname);

    const mainApp = subDomainList.find((app) => app.main);
    console.log("#",mainApp )
    if (subdomain === "") return mainApp.app;
    const apps = subDomainList.find((app) => subdomain === app.subdomain);

    return apps ? apps.app : mainApp.app
}


export const getSubDomain = (location) => {
    console.log("$$", location)
    const locationParts = location.split(".");
    const isLocalhost = locationParts.slice(-1)[0] === "localhost";
    
    const sliceTill = isLocalhost? -1 : -2;
    console.log("$$", locationParts.slice(0, sliceTill).join(""))
    return locationParts.slice(0, sliceTill).join("");
};