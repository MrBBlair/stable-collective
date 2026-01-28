"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

// Mock entry signals data
const mockSignals = [
  { symbol: "EURUSD", action: "BUY", price: "1.0500", time: "10:30 AM", trend: "up" },
  { symbol: "GBPUSD", action: "SELL", price: "1.2750", time: "10:25 AM", trend: "down" },
  { symbol: "USDJPY", action: "BUY", price: "149.50", time: "10:20 AM", trend: "up" },
  { symbol: "BTCUSD", action: "BUY", price: "42,500", time: "10:15 AM", trend: "up" },
  { symbol: "ES1!", action: "SELL", price: "4,850", time: "10:10 AM", trend: "down" },
];

export default function ScannerPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (scriptLoadedRef.current || !containerRef.current) return;

    const container = containerRef.current;

    // Create and load TradingView script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "600",
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
      isTransparent: false,
    });

    container.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      // Cleanup
      if (container && script.parentNode) {
        script.parentNode.removeChild(script);
        scriptLoadedRef.current = false;
      }
    };
  }, []);

  return (
    <div className="min-h-screen trading-bg-pattern">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Jubilee Market Interface</h1>
            <p className="text-xl text-muted-foreground">
              4x | Futures | Crypto
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Scanner Widget */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Market Scanner</CardTitle>
                  <CardDescription>
                    Real-time market analysis across Forex, Crypto, and Futures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="tradingview-widget-container" ref={containerRef}>
                    <div className="tradingview-widget-container__widget"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Entry Signals Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Entry Signals</CardTitle>
                  <CardDescription>Live trading opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockSignals.map((signal, index) => (
                      <div
                        key={index}
                        className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold">{signal.symbol}</span>
                          {signal.trend === "up" ? (
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          ) : (
                            <TrendingDown className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className={`font-bold ${signal.action === "BUY" ? "text-green-500" : "text-red-500"}`}>
                            {signal.action}
                          </span>
                          <span className="text-muted-foreground">@{signal.price}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{signal.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>Note:</strong> This scanner provides market analysis tools. Always conduct your own research
                  and risk assessment before making trading decisions. Past performance does not guarantee future results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
