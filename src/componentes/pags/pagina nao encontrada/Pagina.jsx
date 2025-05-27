const NotFound = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100%',
            width: '100%', 
            flexDirection: 'column' 
        }}>
            <h1>404 - Página Não Encontrada</h1>
            <p>A página que você está procurando não existe.</p>
        </div>
    );
};

export default NotFound;