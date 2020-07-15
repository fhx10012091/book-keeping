export const LIST_VIEW = 'list'
export const CHART_VIEW = 'chart'
export const IN_COUNT = 'income'
export const OUT_COUNT = 'outcome'


export const padLeft = (n) => {
    return n < 10 ? '0' + n : n
}

export const range = (size, startAt = 0) => {
    const arr = []
    for(let i = 0; i < size; i++) {
        arr[i] = startAt + i
    }
    return arr
}

export const parseToYearOrMonth = (str) => {
    const date = str ? new Date(str) : new Date();
    let month = date.getMonth(), year = date.getFullYear();
    if(month === 12){
        year += 1
        month = 1
    } else {
        month += 1
    }
    return {
        year,
        month
    }
}