export default function getConfigs(params: { baseUrl: string; mode: string }) {
    // local, development, production 마다 달라지는 값
    const { baseUrl, mode } = params;

    // 공통으로 반환되는 구조
    return {
        baseUrl,
        mode,
    };
}
