// typescript: no-unused-vars should trigger
const unusedTsVariable = 42;
export function hello(name: string | null) {
    return name ?? 'world';
}
