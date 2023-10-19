export async function allStates(
    context: StatusChangeContext,
    next: () => Promise<any>
) {
    const { clients: {
        status,
        vbase
    } } = context;    
    status.getStatus("200")
    next();
}