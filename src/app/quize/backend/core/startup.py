from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from contextlib import asynccontextmanager
import httpx

from app.quize.backend.core.routers import inculde_routers
from app.quize.backend.handlers.pages import main_router
from app.quize.backend.settings.paths import STATIC_DIR
from app.quize.backend.core.errros import inlude_errors
from core.logging import setup_logging


def create_app():
    @asynccontextmanager
    async def life_span(app: FastAPI):
        app.state.httpx_client = httpx.AsyncClient()
        yield
        await app.state.httpx_client.aclose()

    app = FastAPI(lifespan=life_span)

    app.mount(
        path="/static",
        app=StaticFiles(directory=STATIC_DIR),
        name="static",
    )

    inculde_routers(app=app, routers=[main_router])
    inlude_errors(app=app)
    setup_logging()
    return app
