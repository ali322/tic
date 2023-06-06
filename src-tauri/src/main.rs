#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod command;
mod menu;
mod sysproxy;

fn main() {
  let mut builder = tauri::Builder::default();
  builder = command::apply_command(builder);
  builder = menu::apply_menu(builder);
  builder.run(tauri::generate_context!())
    .expect("error while running tauri application");
}
