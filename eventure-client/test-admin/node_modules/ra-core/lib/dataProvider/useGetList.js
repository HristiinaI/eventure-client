"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var useQueryWithStore_1 = __importDefault(require("./useQueryWithStore"));
/**
 * Call the dataProvider.getList() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { data: [data from store], ids: [ids from response], total: [total from response], loading: false, loaded: true }
 * - error: { error: [error from response], loading: false, loaded: true }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { title: 'hello, world' }
 * @param {Object} options Options object to pass to the dataProvider. May include side effects to be executed upon success of failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded }.
 *
 * @example
 *
 * import { useGetList } from 'react-admin';
 *
 * const LatestNews = () => {
 *     const { data, ids, loading, error } = useGetList(
 *         'posts',
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' }
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{ids.map(id =>
 *         <li key={id}>{data[id].title}</li>
 *     )}</ul>;
 * };
 */
var useGetList = function (resource, pagination, sort, filter, options) {
    if (options && options.action) {
        throw new Error('useGetList() does not support custom action names. Use useQueryWithStore() and your own Redux selectors if you need a custom action name for a getList query');
    }
    var key = JSON.stringify({
        type: 'GET_LIST',
        resource: resource,
        payload: { pagination: pagination, sort: sort, filter: filter },
    });
    var _a = useQueryWithStore_1.default({ type: 'getList', resource: resource, payload: { pagination: pagination, sort: sort, filter: filter } }, options, function (state) {
        return state.admin.customQueries[key]
            ? state.admin.customQueries[key].data
            : null;
    }, function (state) {
        return state.admin.customQueries[key]
            ? state.admin.customQueries[key].total
            : null;
    }), data = _a.data, total = _a.total, error = _a.error, loading = _a.loading, loaded = _a.loaded;
    var ids = data ? data.map(function (record) { return record.id; }) : [];
    var dataObject = data
        ? data.reduce(function (acc, next) {
            acc[next.id] = next;
            return acc;
        }, {})
        : {};
    return { data: dataObject, ids: ids, total: total, error: error, loading: loading, loaded: loaded };
};
exports.default = useGetList;
