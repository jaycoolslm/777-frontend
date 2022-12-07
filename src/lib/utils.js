export const verifyReq = async (key) => {
    const url = `${import.meta.env.VITE_API}/auth?key=${key}`;
    const res = await fetch(url);
    const json = await res.json();
    return json
};

export const reqTx = async (id) => {
    const url = `${import.meta.env.VITE_API}/buildTx`;
    const body = {
        id
    }
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    const { bytes } = await res.json()
    return bytes
}

export const sendTx = async (signedTx) => {
    const bytes = signedTx.toBytes()
    const url = `${import.meta.env.VITE_API}/submitTx`;
    const body = {
        bytes
    }
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })

    const { success } = await res.json()
    return success
}