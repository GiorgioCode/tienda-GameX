/*
mount
update
unmount


mount
|- constructor
|- render
|-componentDidMount

update
|-render
|-componentDidUpdate


<>-|unmount|-<>
|-componentWillUnmount

TODAS ESTAS ETAPAS SE PUEDEN ENGLOBAR EN UN HOOK -> EL useEffect

useEffect(()=>{
    todo va a ejecutarse cuando el componente se monta o cuando se actualiza
},[contador]) 
useEffect([])
    se ejecuta SOLO cuando el componente se monta

    useEffect(()=>{
    setContador(contador + 1)
},[contador])  genera bucle infinito

    useEffect(()=>{
        setTimeout(()=>{
            setContador(contador + 1)
        },2000)
},[contador])  genera bucle infinito



*/