interface keysInterface {
    unchecked: string,
    checked: string,
}

interface colorSchemeInterface {
    primary: keysInterface
    secondary: keysInterface,
    red: keysInterface,
    orange: keysInterface,
    disabled: keysInterface
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
