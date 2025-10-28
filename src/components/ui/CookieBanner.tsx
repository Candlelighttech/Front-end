import { useState, useEffect } from "react";
import { Cookie, Settings, X, Check } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Clear existing consent for testing
    localStorage.removeItem("cookie-consent");
    setTimeout(() => setIsVisible(true), 1000);
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ ...preferences, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm animate-slide-up">
      <div className="bg-card/95 backdrop-blur-md border border-primary-accent/30 rounded-2xl shadow-2xl overflow-hidden">
        {!showSettings ? (
          <div className="p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-accent to-light-accent flex items-center justify-center flex-shrink-0">
                <Cookie className="h-4 w-4 text-base-dark" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-sm mb-1">We use cookies</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We use cookies to enhance your experience and analyze site usage.
                </p>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-muted-foreground hover:text-primary-accent transition-colors"
                >
                  <Settings className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="text-muted-foreground hover:text-primary-accent transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-3 py-2 rounded-lg bg-gradient-to-r from-primary-accent to-light-accent text-base-dark font-heading font-semibold text-xs hover:opacity-90 transition-opacity"
                >
                  Accept All
                </button>
                <button
                  onClick={handleDeny}
                  className="flex-1 px-3 py-2 rounded-lg border border-primary-accent/30 text-primary-accent font-heading font-semibold text-xs hover:bg-primary-accent/10 transition-colors"
                >
                  Deny
                </button>
              </div>

            </div>
          </div>
        ) : (
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading font-bold text-sm">Cookie Settings</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-muted-foreground hover:text-primary-accent transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-heading font-semibold">Necessary</p>
                  <p className="text-xs text-muted-foreground">Required for basic functionality</p>
                </div>
                <div className="w-8 h-4 bg-primary-accent rounded-full flex items-center">
                  <div className="w-3 h-3 bg-base-dark rounded-full ml-auto mr-0.5" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-heading font-semibold">Analytics</p>
                  <p className="text-xs text-muted-foreground">Help us improve our site</p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-8 h-4 rounded-full flex items-center transition-colors ${
                    preferences.analytics ? 'bg-primary-accent' : 'bg-muted-foreground/30'
                  }`}
                >
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                    preferences.analytics ? 'ml-auto mr-0.5' : 'ml-0.5'
                  }`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-heading font-semibold">Marketing</p>
                  <p className="text-xs text-muted-foreground">Personalized ads and content</p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-8 h-4 rounded-full flex items-center transition-colors ${
                    preferences.marketing ? 'bg-primary-accent' : 'bg-muted-foreground/30'
                  }`}
                >
                  <div className={`w-3 h-3 bg-white rounded-full transition-transform ${
                    preferences.marketing ? 'ml-auto mr-0.5' : 'ml-0.5'
                  }`} />
                </button>
              </div>
            </div>
            
            <button
              onClick={handleSavePreferences}
              className="w-full px-3 py-2 rounded-lg bg-gradient-to-r from-primary-accent to-light-accent text-base-dark font-heading font-semibold text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
            >
              <Check className="h-3 w-3" />
              Save Preferences
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;