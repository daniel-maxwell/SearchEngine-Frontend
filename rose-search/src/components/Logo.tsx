/**
 * Logo Component
 * 
 * Displays the ROSE brand logo with a gradient color effect.
 */
export function Logo() {
    return (
      <div className="text-5xl font-bold text-center">
        {/* Each letter styled with a different shade of rose */}
        <span className="text-rose-500">R</span>
        <span className="text-rose-400">O</span>
        <span className="text-rose-300">S</span>
        <span className="text-rose-200">E</span>
      </div>
    );
  }