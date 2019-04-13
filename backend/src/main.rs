extern crate actix_web;
#[macro_use]
extern crate log;
extern crate env_logger;
extern crate serde;

use actix_web::middleware::{Logger, cors::Cors};
use actix_web::{server, App, HttpRequest, Json, Result};
use serde::{Deserialize, Serialize};

use backend::Data;

fn index(_req: &HttpRequest) -> &'static str {
    "Hello world!"
}

fn data(_req: &HttpRequest) -> Result<Json<Data>> {
    Ok(Json(Data{name: "Jimmy".to_string(), message: "Hi.".to_string()}))
}

fn main() {
    std::env::set_var("RUST_LOG", "actix_web=info");
    env_logger::init();

    info!("starting");

    server::new(|| {
        App::new()
            .middleware(Logger::default())
            .middleware(Cors::build()
                .allowed_origin("http://localhost:8080")
                .finish())
            .resource("/", |r| r.f(index))
            .resource("/data", |r| r.f(data))
    })
    .bind("127.0.0.1:8081")
    .unwrap()
    .run();
}
