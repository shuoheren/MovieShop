export interface PagedResult<T> {
    count: number;
    pageSize: number;
    pageIndex: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    data: T[];
}
