from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

from app.domain.errors import AppError


def inlude_errors(app: FastAPI) -> None:
    @app.exception_handler(AppError)
    async def exception_handler(
        request: Request,
        exc: AppError,
    ) -> JSONResponse:
        return JSONResponse(
            status_code=exc.status_code,
            content={"message": exc.user_message, "code": exc.code},
        )
