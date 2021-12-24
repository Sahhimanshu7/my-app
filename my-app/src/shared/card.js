import Proptypes from 'prop-types';

function card({children,reverse}){
    return(
        <div className="card"
        style = {{backgroundColor :  reverse ? 'rgb(0,0,0,0.4)':'#f5f5f5'}}>
            {children}
        </div>
    )
}

card.defaultProps = {
    reverse : false,
};

card.propTypes = {
    children : Proptypes.node.isRequired,
    reverse : Proptypes.bool,
};

export default card;