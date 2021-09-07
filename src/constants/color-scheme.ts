interface colorSchemeInterface {
    primary: object,
    secondary: object,
    red: object,
    orange: object,
    disabled: object
}

const colorScheme: colorSchemeInterface = {
    primary: {
        unchecked: '#d9d9d9',
        checked: '#5468ff',
    },
    secondary: {
        unchecked: '#d9d9d9',
        checked: '#03dac5',
    },
    red: {
        unchecked: '#d9d9d9',
        checked: '#f44336',
    },
    orange: {
        unchecked: '#d9d9d9',
        checked: '#ff9800',
    },
    disabled: {
        unchecked: '#d9d9d9',
        checked: '#bfbfbf',
    }
};

export default colorScheme
