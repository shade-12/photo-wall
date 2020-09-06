import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffcad4',
            main: '#ffe5d9',
            dark: '#f4acb7',
            contrastText: '#355070'
        },
        secondary: {
            light: '#d8e2dc',
            main: '#9d8189',
            contrastText: '#d8e2dc'
        }
    },
    typography: {
        fontFamily: 'Raleway'
    }
});

export default responsiveFontSizes(theme);