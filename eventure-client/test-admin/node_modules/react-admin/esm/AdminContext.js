import { CoreAdminContext } from 'ra-core';
import defaultI18nProvider from './defaultI18nProvider';
var AdminContext = CoreAdminContext;
AdminContext.defaultProps = {
    i18nProvider: defaultI18nProvider,
};
AdminContext.displayName = 'AdminContext';
export default AdminContext;
