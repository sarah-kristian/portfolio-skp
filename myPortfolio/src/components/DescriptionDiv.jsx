
import DescrResearcher from "./description/DescrResearcher"
import DescrTeacher from "./description/DescrTeacher"
import DescrDeveloper from "./description/DescrTeacher"
import PropTypes from 'prop-types'

function DescriptionDiv( {roleName} ){
 
    function selectComponent(roleName){
        if (roleName=="teacher"){<DescrTeacher />};
        if (roleName=="researcher"){<DescrResearcher />};
        if (roleName=="developer"){<DescrDeveloper />};
    }


    return (
        <section id="description">
            {selectComponent(roleName)}
        </section>
    )
}


DescriptionDiv.propTypes = {
    roleName: PropTypes.string.isRequired,
}

export default DescriptionDiv