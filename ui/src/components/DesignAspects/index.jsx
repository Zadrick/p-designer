import './style.scss'
import ToggleSwitch from '../ToggleSwich'

const DesignAspects = () => {
    return (
        <div className="design-aspects">
            <h2>Project Design Aspects</h2>
            <div className="design-aspects__content">
                <div className="design-aspects__item">
                    <div className="design-aspects__name">Business Layer</div>
                    <ToggleSwitch />
                </div>
                <div className="design-aspects__item">
                    <div className="design-aspects__name">Business Layer</div>
                    <ToggleSwitch />
                </div>
                <div className="design-aspects__item">
                    <div className="design-aspects__name">Business Layer</div>
                    <ToggleSwitch />
                </div>
                <div className="design-aspects__item">
                    <div className="design-aspects__name">Business Layer</div>
                    <ToggleSwitch /> 
                </div>
            </div>
        </div>
    )
}

export default DesignAspects
