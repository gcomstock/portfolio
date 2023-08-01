import './Device.css';

export function Device({ type, image }) {
  if (type == 'web') {
    return (
      <div className="Device-web">
        <div className="Device-web-header">
          <div className="Device-web-bubble"/>
          <div className="Device-web-bubble"/>
          <div className="Device-web-bubble"/>
        </div>
        <img src={process.env.PUBLIC_URL + 'work/' + image}/>
      </div>
    )
  }
};
