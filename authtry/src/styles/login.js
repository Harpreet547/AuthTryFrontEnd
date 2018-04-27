import appConstants from '../utils/appConstants';

const loginStyle = {
    rootDiv: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex', //this worked for aligning card to vartically center
        backgroundColor: appConstants.appTheme.offWhite
    },
    loginCard: {
        minWidth: 300,
        width: '35%',
        margin: 'auto',
    },
    credentialDiv: {
        margin: appConstants.appMargins.baseMargin,
        justifyContent: 'center',
        alignContent: 'center',
    },
    credentialTextFieldDiv: {
        width: '80%',
        margin: 'auto',
        flex: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
    },
    credentialTextField: {
        width: '100%',
        flex: 'auto',
        justifyContent: 'center',
        alignContent: 'center',
    },
    cardTitle: {
        backgroundColor: appConstants.appTheme.primaryColor,
        color: appConstants.appTheme.secondaryTextColor
    },
    loginButton: {
        width: '100%',
        backgroundColor: appConstants.appTheme.primaryColor,
        color: appConstants.appTheme.secondaryTextColor,
        padding: 0,
        margin: 0
    },
    cardActions: {
        padding: 0,
    }
}

export default loginStyle;