export const initState = {
    gridData: [
        {
            key: 0, sign: '', canMove: true
        },
        {
            key: 1, sign: '', canMove: true
        },
        {
            key: 2, sign: '', canMove: true
        },
        {
            key: 3, sign: '', canMove: true
        },
        {
            key: 4, sign: '', canMove: true
        },
        {
            key: 5, sign: '', canMove: true
        },
        {
            key: 6, sign: '', canMove: true
        },
        {
            key: 7, sign: '', canMove: true
        },
        {
            key: 8, sign: '', canMove: true
        }

    ],
    currentMove: 'X',
    status: `Next move is X`,
    winnerCombo: []
}

export function initGridData(num = 9) {
    const arNum = Array.from({ length: num }, (_, i) => i);
    return arNum.map(v => (
        {
            key: v,
            sign: '',
            canMove: true
        }
    ))
}

export const gridData = [
    {
        key: 0, sign: '', canMove: true
    },
    {
        key: 1, sign: '', canMove: true
    },
    {
        key: 2, sign: '', canMove: true
    },
    {
        key: 3, sign: '', canMove: true
    },
    {
        key: 4, sign: '', canMove: true
    },
    {
        key: 5, sign: '', canMove: true
    },
    {
        key: 6, sign: '', canMove: true
    },
    {
        key: 7, sign: '', canMove: true
    },
    {
        key: 8, sign: '', canMove: true
    }

]


// export default initState