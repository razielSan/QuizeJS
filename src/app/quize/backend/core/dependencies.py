from typing import cast

from fastapi import Request
import httpx


async def get_session(request: Request) -> httpx.AsyncClient:
    return cast(httpx.AsyncClient, request.app.state.httpx_client)
