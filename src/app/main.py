import uvicorn

from app.settings.app import AppSettings
from app.quize.backend.core.startup import create_app


app = create_app()


def run() -> None:
    uvicorn.run(
        app=AppSettings.APP,
        host=AppSettings.HOST,
        port=AppSettings.PORT,
        reload=AppSettings.RELOAD,
    )
