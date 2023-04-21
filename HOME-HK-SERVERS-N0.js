/** @param {NS} ns */
export async function main(ns) {

                
    const srvrN0 = [
        "n00dles",
        "foodnstuff",
        "sigma-cosmetics",
        "joesguns",
        "nectar-net",
        "hong-fang-tea",
        "harakiri-sushi"
    ];
        
    
        let hkscript = ns.args[0];


        for(let i = 0; i< srvrN0.length; ++i){
        
        const target = srvrN0[i];
        const srvrprop = ns.getServer(target);
        
        if (ns.fileExists("BruteSSH.exe", "home")) {
                if (!srvrprop.sshPortOpen) { ns.brutessh(target); };
        };

        if (ns.fileExists("FTPCrack.exe", "home")) {
                if (!srvrprop.ftpPortOpen) { ns.ftpcrack(target); };
        };

        if (ns.fileExists("relaySMTP.exe", "home")) {
                if (!srvrprop.smtpPortOpen) { ns.relaysmtp(target); };
        };

        if (ns.fileExists("HTTPWorm.exe", "home")) {
                if (!srvrprop.httpPortOpen) { ns.httpworm(target); };
        };

        if (ns.fileExists("SQLInject.exe", "home")) {
                if (!srvrprop.sqlPortOpen) { ns.sqlinject(target); };
        };

        ns.nuke(target);

        ns.exec(hkscript, "home", target === "n00dles" ? 25 : 50, target);
        
        };

}

export function autocomplete(data, args) {
        return data.servers;
}
