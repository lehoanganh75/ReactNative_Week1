class Logger {
    private static instance: Logger;
    private constructor() {}

    public static getInstance(): Logger {
         if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string): void {
        console.log(`[LOG] ${message}`);
    }

    public error(message: string): void {
        console.error(`[ERROR] ${message}`);
    }

    public warn(message: string): void {
        console.warn(`[WARN] ${message}`);
    }
}

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log("Ung dung chay");
logger2.error("Loi!");