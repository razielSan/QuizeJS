from typing import Sequence

from fastapi import FastAPI, APIRouter


def inculde_routers(
    app: FastAPI,
    routers: Sequence[APIRouter],
) -> None:
    for router in routers:
        app.include_router(router=router)
