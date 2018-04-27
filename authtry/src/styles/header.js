import appConstants from '../utils/appConstants';

const headerStyle = {
    tabs: {
        width: '200%',
        float: 'right',
        direction: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },
    tabTitleNavLink: {
        textDecoration: 'none',
        color: appConstants.appTheme.secondaryTextColor,
        width: '100%',
        height: '100%',
        margin: 'auto',
        flex: 'auto'
    }
}

export default headerStyle;