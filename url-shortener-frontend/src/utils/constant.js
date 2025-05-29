import AppRouter, { SubDomainRouter } from "../AppRouter";

export const subDomainList = [
    {subdomain:"www", app:AppRouter, main: true},
    {subdomain:"url", app:SubDomainRouter, main:false},
    // {subdomain:"peppy-boba-2789d6", app:SubDomainRouter, main:false}
];