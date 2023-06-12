export const baseConf = {
  relay: {
    server: "la.alichen.top:3443",
    uuid: "abc",
    password: "foo",
    udp_relay_mode: 'native',
    congestion_control: "bbr",
    alpn: ["h3", "spdy/3.1"],
  },
  local: {
    server: "[::]:1086",
    dual_stack: true,
    max_packet_size: 1500,
  },
  log_level: "info",
};
