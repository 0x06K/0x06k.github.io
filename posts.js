// ========================================
// CENTRALIZED POSTS DATA
// Update this file only when adding new posts
// Both index.html and category.html will load this
// ========================================

const allPosts = {
    // ===== RED TEAM OPERATIONS =====
    reveng: [
        
    ],
    
    exploit: [
        
    ],
    maldev:[
        {
            title: 'Welcome to the Blog',
            date: '2024-12-07',
            desc: 'Learning Windows Internels for Malware Development. #WindowsInternals #MalwareDevelopment #MalwareResearch #ReverseEngineering #CyberSecurity #RedTeam #OffensiveSecurity #ExploitDevelopment #WindowsSecurity #LowLevelProgramming #SecurityResearch #Infosec #EthicalHacking #ThreatResearch #x64 #Assembly #KernelDevelopment',
            link: './BLOGS/REDTEAMING/MalwareDevelopment/windows-internel-post1.html'
        }
    ],
    pentest: [
        
    ],

    // ===== BLUE TEAM OPERATIONS =====
    threathunt: [
        
    ],
    
    incidentresponse: [
        
    ],
    
    siem: [
        
    ],
    
    malwareanalysis: [
        
    ],

    // ===== CTF WRITEUPS =====
    picoctf: [

    ],
    
    htb: [
        
    ],
    
    thm: [
        
    ],
    
    majorctf: [
        
    ],

    // ===== PROJECTS =====
    sectools: [
    ],
    
    malware: [
        
    ],

    
    opensource: [
        
    ],
    
    learning: [
        {
            title: 'Failure OS',
            date: '2024-12-07',
            desc: 'Educational project demonstrating operating system concepts. Implemented in C and NASM.',
            link: 'https://github.com/0x06k/os-development'
        },
        {
            title: 'toolbox-0x06k',
            date: '2024-11-15',
            desc: 'My custom built toolkit usual i use it during CTFs.',
            link: 'https://github.com/0x06k/toolbox-06k'
        },
        {
            title: 'DataStrctures',
            date: '2024-11-15',
            desc: 'All the fundamental DataStructures implemented in CPP. I tried my best to use every single concept of OOP like templates and polymorphism.',
            link: 'https://github.com/0x06k/DataStructures'
        },
        {
            title: 'Ring-3-to-Ring-0',
            date: '2024-11-15',
            desc: 'All the fundamental DataStructures implemented in CPP. I tried my best to use every single concept of OOP like templates and polymorphism.',
            link: 'https://github.com/0x06k/Ring-3-to-Ring-0'
        },
        {
            title: 'ZeroDayCrew',
            date: '2024-11-15',
            desc: 'A hacker-inspired server-client chatroom built with C# and WPF, featuring real-time messaging and server management.',
            link: 'https://github.com/0x06k/ZeroDayCrew'
        },
        {
            title: 'cof-cheat',
            date: '2024-11-15',
            desc: ' health cheat for game "cry of fear". ',
            link: 'https://github.com/0x06k/cof-cheat'
        },
        {
            title: 'PE-Extractor',
            date: '2024-11-15',
            desc: 'just a simple PE header extractor. ',
            link: 'https://github.com/0x06k/PE-Extractor'
        }
    ]
};

// ========================================
// CATEGORY METADATA
// ========================================

const categoryInfo = {
    // Red Team Operations
    reveng: {
        title: 'Reverse Engineering',
        desc: 'Binary analysis, malware dissection, protocol reverse engineering, and low-level system exploration.',
        section: 'Red Team Operations',
        icon: 'fa-bug'
    },
    exploit: {
        title: 'Exploit Development',
        desc: 'Zero-day research, heap exploitation, ROP chains, CVE analysis, and vulnerability research.',
        section: 'Red Team Operations',
        icon: 'fa-bomb'
    },
    maldev: {
        title: 'Malware Development',
        desc: 'Custom payloads, C2 frameworks, EDR evasion techniques, and persistence mechanisms.',
        section: 'Red Team Operations',
        icon: 'fa-virus'
    },
    pentest: {
        title: 'Penetration Testing',
        desc: 'Network assessments, web application security, Active Directory attacks, and infrastructure testing.',
        section: 'Red Team Operations',
        icon: 'fa-user-ninja'
    },

    // Blue Team Operations
    threathunt: {
        title: 'Threat Hunting',
        desc: 'Proactive threat detection, anomaly analysis, IOC tracking, and advanced persistent threat identification.',
        section: 'Blue Team Operations',
        icon: 'fa-crosshairs'
    },
    incidentresponse: {
        title: 'Incident Response',
        desc: 'DFIR, forensic analysis, breach containment, post-incident reports, and recovery procedures.',
        section: 'Blue Team Operations',
        icon: 'fa-fire-extinguisher'
    },
    siem: {
        title: 'SIEM & Log Analysis',
        desc: 'Splunk, ELK Stack, security monitoring, correlation rules, and log management strategies.',
        section: 'Blue Team Operations',
        icon: 'fa-chart-line'
    },
    malwareanalysis: {
        title: 'Malware Analysis',
        desc: 'Static & dynamic analysis, sandbox detonation, reverse engineering malicious software.',
        section: 'Blue Team Operations',
        icon: 'fa-microscope'
    },

    // CTF Writeups
    picoctf: {
        title: 'picoCTF',
        desc: 'Beginner-friendly challenges and annual competition writeups from picoCTF events.',
        section: 'CTF Writeups',
        icon: 'fa-flag'
    },
    htb: {
        title: 'HackTheBox',
        desc: 'Machines, Pro Labs, and seasonal CTF events from HackTheBox platform.',
        section: 'CTF Writeups',
        icon: 'fa-cube'
    },
    thm: {
        title: 'TryHackMe',
        desc: 'Learning paths, rooms, and guided security challenges from TryHackMe.',
        section: 'CTF Writeups',
        icon: 'fa-graduation-cap'
    },
    majorctf: {
        title: 'Major CTF Events',
        desc: 'DEF CON, Google CTF, and global competitive cybersecurity events.',
        section: 'CTF Writeups',
        icon: 'fa-trophy'
    },

    // Projects
    sectools: {
        title: 'Security Tools',
        desc: 'Custom exploitation frameworks, scanners, automation tools, and security utilities.',
        section: 'Projects',
        icon: 'fa-tools'
    },
    malware: {
        title: 'Malware Research',
        desc: 'Proof-of-concept malware, C2 frameworks, and EDR evasion research projects.',
        section: 'Projects',
        icon: 'fa-flask'
    },
    opensource: {
        title: 'Open Source Contributions',
        desc: 'Community contributions, collaborative projects, and open-source security work.',
        section: 'Projects',
        icon: 'fa-code-branch'
    },
    learning: {
        title: 'Learning & Experiments',
        desc: 'Educational projects, proof-of-concepts, and hands-on skill development exercises.',
        section: 'Projects',
        icon: 'fa-laptop-code'
    }
};

// ========================================
// HELPER FUNCTIONS
// ========================================

// Get all posts sorted by date
function getAllPostsSorted(ascending = false) {
    const allPostsFlat = [];
    Object.keys(allPosts).forEach(category => {
        allPosts[category].forEach(post => {
            allPostsFlat.push({
                ...post,
                category,
                categoryTitle: categoryInfo[category].title,
                section: categoryInfo[category].section
            });
        });
    });
    
    return allPostsFlat.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return ascending ? dateA - dateB : dateB - dateA;
    });
}

// Get recent posts (default: last 5)
function getRecentPosts(count = 5) {
    return getAllPostsSorted().slice(0, count);
}

// Get posts count by category
function getPostsCount() {
    const counts = {};
    Object.keys(allPosts).forEach(category => {
        counts[category] = allPosts[category].length;
    });
    return counts;
}

// Get total posts count
function getTotalPostsCount() {
    return Object.values(allPosts).reduce((total, posts) => total + posts.length, 0);
}

// Search posts across all categories
function searchPosts(query) {
    const lowerQuery = query.toLowerCase();
    return getAllPostsSorted().filter(post => 
        post.title.toLowerCase().includes(lowerQuery) ||
        post.desc.toLowerCase().includes(lowerQuery) ||
        post.categoryTitle.toLowerCase().includes(lowerQuery)
    );
}