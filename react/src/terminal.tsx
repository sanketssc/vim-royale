function TerminalRelativeNu() {
    const els = new Array(24).fill(0).map(_ => {
        return (
            <div className="terminal-column">
                {new Array(3).fill(0).map(_ => <div className="terminal-byte"> </div>)}
            </div>
        );
    });

    return (
        <div className="terminal-relative-nu">
            {els}
        </div>
    );
}

function TerminalDisplay() {
    const els = new Array(24).fill(0).map(_ => {
        return (
            <div className="terminal-column">
                {new Array(80).fill(0).map(_ => <div className="terminal-byte"> </div>)}
            </div>
        );
    });

    return (
        <div className="terminal-display">
            {els}
        </div>
    );;
}

export function Terminal() {
    return (
        <div className="terminal">
            <TerminalRelativeNu />
            <TerminalDisplay />
        </div>
    );;
}

