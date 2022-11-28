function strToArr(string: string): number[] {
    return string.split('').map(x => +x);
}

export function thePrimeagen(): number[][] {
    return [
        strToArr("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"),
        strToArr("011111111111111011111100111111011111111111111000011111100000000001111110111111111111110111111000000000011111101111111111111100001111111111011111111111111000000000111111111111110111111001111110111111111111110001111111111111101111111111111111000111111111101111110000000000111111011111111111111011111111111111011111111111111011111111111111011111100000000001111110"),
        strToArr("011222222222211011221100112211011222222222211000011221111111111001122110112222222222110112211111111111111221101122222222221100001122222211011222222222211000000000112222222222110112211001122110112222222222110001122222222221101122222222222211000112222221101122111111111111112211011222222222211011222222222211011222222222211011222222222211011221111111111001122110"),
        strToArr("011111122111111011221100112211011221111111111000011222222222211001122110112211111122110112222222222222222221101122111111111100001111221111011221111111111000000000111111221111110112211001122110112211111111110001122111111221101122111111112211000111122111101122222222222222222211011221111111111011221111112211011221111111111011221111111111011222222222211001122110"),
        strToArr("000001122110000011221100112211011221100000000000011221111112211001122110112211001122110112211111122111111221101122110000000000000011221100011221100000000000000000000011221100000112211001122110112211000000000001122110011221101122110000112211000001122110001122111111221111112211011221100000000011221100112211011221100000000011221100000000011221111112211001122110"),
        strToArr("000001122110000011221111112211011221111111111000011221100112211001122110112211111122110112211001122110011221101122111111111100000011221100011221111111111000000000000011221100000112211111122110112211111111110001122111111221101122111111112211000001122110001122110011221100112211011221111111111011221111112211011221100000000011221111111111011221100112211001122110"),
        strToArr("000001122110000011222222222211011222222222211000011221100112211001122110112222222222110112211001122110011221101122222222221100000011221100011222222222211000000000000011221100000112222222222110112222222222110001122222222221101122222222222211000001122110001122110011221100112211011222222222211011222222222211011221100111111011222222222211011221100112211001122110"),
        strToArr("000001122110000011221111112211011221111111111000011221100112211001122110112211111122110112211001111110011221101122111111111100000011221100011111111112211000000000000011221100000112211111122110112211111111110001122111111111101122111111221111000001122110001122110011111100112211011221111111111011221111112211011221100112211011221111111111011221100112211001122110"),
        strToArr("000001122110000011221100112211011221100000000000011221100112211111122110112211001122110112211000000000011221101122110000000000000011221100000000000112211011111100000011221100000112211001122110112211000000000001122110000000001122110011221100000001122110001122110000000000112211011221100000000011221100112211011221100112211011221100000000011221100112211111122110"),
        strToArr("000001122110000011221100112211011221111111111000011221100112222222222110112211001122110112211000000000011221101122111111111100001111221111011111111112211011221100000011221100000112211001122110112211111111110001122110000000001122110011221111110111122111101122110000000000112211011221111111111011221100112211011221111112211011221111111111011221100112222222222110"),
        strToArr("000001122110000011221100112211011222222222211000011221100111111111122110112211001122110112211000000000011221101122222222221100001122222211011222222222211011111100000011221100000112211001122110112222222222110001122110000000001122110011222222110112222221101122110000000000112211011222222222211011221100112211011222222222211011222222222211011221100111111111122110"),
        strToArr("000001111110000011111100111111011111111111111000011111100000000001111110111111001111110111111000000000011111101111111111111100001111111111011111111111111000001100000011111100000111111001111110111111111111110001111110000000001111110011111111110111111111101111110000000000111111011111111111111011111100111111011111111111111011111111111111011111100000000001111110"),
        strToArr("000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"),
    ];
}

export class Scroller {
    private offset: number;
    private rows: number;
    private cols: number;
    constructor(
        private strings: number[][],
        private startRow: number,
    ) {
        this.offset = 0;
        this.rows = strings.length;
        this.cols = strings[0].length;
    }

    run(buffer: number[][]): boolean {
        this.offset++;
        const displayRows = buffer.length;
        const displayCols = buffer[0].length;

        for (let row = 0; row < this.rows; ++row) {
            const displayRow = this.startRow + row;
            const start = Math.max(0, this.offset - displayCols);

            if (displayRow >= displayRows) {
                continue;
            }

            let displayOffset = 0;
            for (let i = start; i < this.offset; ++i) {
                let displayCol = Math.max(Math.max(0, displayCols - this.offset) + displayOffset - 1, 0);
                displayOffset++;

                if (i < this.cols) {
                    buffer[displayRow][displayCol] = this.strings[row][i];
                } else {
                    buffer[displayRow][displayCol] = 0;
                }
            }
        }

        const running = this.offset < this.cols + displayCols;
        if (!running) {
            this.offset = 0;
        }

        return running;
    }
}
