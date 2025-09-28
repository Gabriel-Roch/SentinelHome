
export abstract class IDeviceRepository<Entity, Params> {
    abstract add(params: Params): Promise<Entity>
    abstract findAll(params?: Partial<Params>): Promise<Entity[]>
    abstract find(params: Partial<Params>): Promise<Entity | null>
    abstract modify(id: string, params: Partial<Params>): Promise<void>
    abstract remove(id: string): Promise<void>
    abstract existsBy(params: Partial<Params>): Promise<boolean>
}