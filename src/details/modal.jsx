import { useEffect } from "react";



export const Modal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            },1000000);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;
    return (
        <div className="back_modal_container" onClick={onClose}>
            <button onClick={onClose}>Close</button>
            <div>
                <iframe width="853" height="480" src="https://www.youtube.com/embed/UpB_p0l1ZRs" title="How US Coast Guard Rescues Tiny Boats Stuck in Frozen Waters" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}