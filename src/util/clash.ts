import YAML from 'yaml'

export default (origin: number, dest: any) => {
  const config = YAML.stringify({
    "mixed-port": parseInt(dest),
    "profile": {
      "store-selected": false,
      "store-fake-ip": false,
    },
    "proxies": [
      {
        "name": "PROXY",
        "type": "socks5",
        "server": "127.0.0.1",
        "port": origin,
        "udp": true
      }
    ],
    "dns": {
      "enable": true,
      "ipv6": true,
      "enhanced-mode": "fake-ip",
      "fake-ip-range": "198.18.0.1/16",
      "default-nameserver": [
        "119.29.29.29",
        "1.1.1.1",
        "8.8.8.8"
      ],
      "nameserver": [
        "https://doh.pub/dns-query", 
        "https://dns.alidns.com/dns-query"
      ],
      "fake-ip-filter": [
        "*.lan",
        "localhost.ptlogin2.qq.com"
      ]
    },
    // "tun":{
    //   "enable": false,
    //   "stack": "system",
    //   "auto-route": true,
    //   "auto-detect-interface": true,
    // },
    "rule-providers": {
      "applications": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
        "path": "./ruleset/applications.yaml",
        "interval": 86400
      },
      "icloud": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
        "path": "./ruleset/icloud.yaml",
        "interval": 86400
      },
      "apple": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
        "path": "./ruleset/apple.yaml",
        "interval": 86400
      },
      "proxy": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
        "path": "./ruleset/direct.yaml",
        "interval": 86400
      },
      "reject": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
        "path": "./ruleset/reject.yaml",
        "interval": 86400
      },
      "direct": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
        "path": "./ruleset/direct.yaml",
        "interval": 86400
      },
      "private": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
        "path": "./ruleset/private.yaml",
        "interval": 86400
      },
      "cncidr": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
        "path": "./ruleset/cncidr.yaml",
        "interval": 86400
      },
      "lancidr": {
        "type": "http",
        "behavior": "domain",
        "url": "https://cdn.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
        "path": "./ruleset/lancidr.yaml",
        "interval": 86400
      },
    },
    "rules": [
      "RULE-SET,applications,DIRECT",
      "RULE-SET,icloud,DIRECT",
      "RULE-SET,apple,DIRECT",
      "RULE-SET,private,DIRECT",
      "RULE-SET,reject,REJECT",
      "RULE-SET,proxy,PROXY",
      "RULE-SET,direct,DIRECT",
      "RULE-SET,lancidr,DIRECT",
      "RULE-SET,cncidr,DIRECT",
      "GEOIP,LAN,DIRECT",
      "GEOIP,CN,DIRECT",
      "MATCH,PROXY"
    ]
  })
  return config
}