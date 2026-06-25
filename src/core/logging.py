import logging

from settings.paths import LOG_DIR


LOG_DIR.mkdir(exist_ok=True)


class FormatLogging:
    QUANTITY: int = 50
    SEPARATOR: str = "-"
    FMT: str = (
        f"{QUANTITY * SEPARATOR}\n[%(asctime)s] - %(name)s - %(filename)s:"
        "%(lineno)d - [%(levelname)s - %(message)s]"
    )
    DATE_FMT: str = "%Y-%m-%d %H:%M:%S"


def setup_logging():
    formatter = logging.Formatter(
        fmt=FormatLogging.FMT,
        datefmt=FormatLogging.DATE_FMT,
    )
    console_handler = logging.StreamHandler()
    console_handler.setFormatter(fmt=formatter)
    file_handler = logging.FileHandler(
        filename=LOG_DIR / "app.log",
        encoding="utf-8",
    )
    file_handler.setFormatter(fmt=formatter)
    root_logger = logging.getLogger()
    root_logger.setLevel(level=logging.INFO)

    if root_logger.handlers:
        root_logger.handlers.clear()

    root_logger.addHandler(console_handler)
    root_logger.addHandler(file_handler)
