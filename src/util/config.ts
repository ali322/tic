export const baseConf = {
  "relay": {
      "server": "la2.alichen.top",
      "port": 3443,
      "token": "9448new",
      "udp_relay_mode": "native",
      "congestion_controller": "cubic",
      "heartbeat_interval": 10000,
      "alpn": ["h3"],
      "disable_sni": false,
      "reduce_rtt": false,
      "request_timeout": 8000,
      "max_udp_relay_packet_size": 1500
  },
  "local": {
      "port": 1086,
      "ip": "127.0.0.1"
  },
  "log_level": "info"
}