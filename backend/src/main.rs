extern crate actix_web;
#[macro_use]
extern crate log;
extern crate env_logger;

use actix_web::middleware::Logger;
use actix_web::{server, App, HttpRequest};

fn index(_req: &HttpRequest) -> &'static str {
    "Hello world!"
}

fn main() {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    info!("starting");

    server::new(|| {
        App::new()
            .middleware(Logger::default())
            .resource("/", |r| r.f(index))
    })
    .bind("127.0.0.1:8088")
    .unwrap()
    .run();
}
