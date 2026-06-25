from fastapi import APIRouter, Request, Depends
from fastapi.responses import HTMLResponse
import httpx

from app.quize.backend.core.extensions import templates
from app.quize.backend.core.dependencies import get_session


router = APIRouter()


@router.get("/")
def start_main_page(
    request: Request,
    httpx_client: httpx.AsyncClient = Depends(get_session),
) -> HTMLResponse:
    return templates.TemplateResponse(
        name="index.html",
        request=request,
    )
