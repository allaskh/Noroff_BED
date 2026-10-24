function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const curryLog = date => importance => message => log(date, importance, message);

const logNow = curryLog(new Date());
logNow("INFO");

const debugNow = logNow("DEBUG");
debugNow("message");

curryLog(new Date())("DEBUG")("some debug");