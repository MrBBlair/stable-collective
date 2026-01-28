"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, RefreshCw, Clock } from "lucide-react";

// Enhanced signal data with strength and timestamp
interface Signal {
  symbol: string;
  action: "BUY" | "SELL";
  price: string;
  time: string;
  trend: "up" | "down";
  strength: number; // 1-5 scale
  marketType: "forex" | "crypto" | "futures";
}

// Mock entry signals data - will be replaced with live data
const generateMockSignals = (marketType: "forex" | "crypto" | "futures"): Signal[] => {
  const now = new Date();
  const baseSignals: Record<string, Signal[]> = {
    forex: [
      { symbol: "EURUSD", action: "BUY", price: "1.0500", time: now.toLocaleTimeString(), trend: "up", strength: 4, marketType: "forex" },
      { symbol: "GBPUSD", action: "SELL", price: "1.2750", time: now.toLocaleTimeString(), trend: "down", strength: 3, marketType: "forex" },
      { symbol: "USDJPY", action: "BUY", price: "149.50", time: now.toLocaleTimeString(), trend: "up", strength: 5, marketType: "forex" },
      { symbol: "AUDUSD", action: "BUY", price: "0.6750", time: now.toLocaleTimeString(), trend: "up", strength: 2, marketType: "forex" },
      { symbol: "USDCAD", action: "SELL", price: "1.3450", time: now.toLocaleTimeString(), trend: "down", strength: 4, marketType: "forex" },
    ],
    crypto: [
      { symbol: "BTCUSD", action: "BUY", price: "42,500", time: now.toLocaleTimeString(), trend: "up", strength: 5, marketType: "crypto" },
      { symbol: "ETHUSD", action: "BUY", price: "2,850", time: now.toLocaleTimeString(), trend: "up", strength: 4, marketType: "crypto" },
      { symbol: "SOLUSD", action: "SELL", price: "98.50", time: now.toLocaleTimeString(), trend: "down", strength: 3, marketType: "crypto" },
      { symbol: "BNBUSD", action: "BUY", price: "315.00", time: now.toLocaleTimeString(), trend: "up", strength: 2, marketType: "crypto" },
      { symbol: "ADAUSD", action: "BUY", price: "0.485", time: now.toLocaleTimeString(), trend: "up", strength: 4, marketType: "crypto" },
    ],
    futures: [
      { symbol: "ES1!", action: "SELL", price: "4,850", time: now.toLocaleTimeString(), trend: "down", strength: 3, marketType: "futures" },
      { symbol: "NQ1!", action: "BUY", price: "17,250", time: now.toLocaleTimeString(), trend: "up", strength: 4, marketType: "futures" },
      { symbol: "YM1!", action: "BUY", price: "38,500", time: now.toLocaleTimeString(), trend: "up", strength: 5, marketType: "futures" },
      { symbol: "CL1!", action: "SELL", price: "72.50", time: now.toLocaleTimeString(), trend: "down", strength: 2, marketType: "futures" },
      { symbol: "GC1!", action: "BUY", price: "2,045", time: now.toLocaleTimeString(), trend: "up", strength: 4, marketType: "futures" },
    ],
  };
  return baseSignals[marketType] || [];
};

const getStrengthColor = (strength: number) => {
  if (strength >= 4) return "bg-green-500";
  if (strength >= 3) return "bg-yellow-500";
  return "bg-orange-500";
};

const getStrengthLabel = (strength: number) => {
  if (strength >= 4) return "Strong";
  if (strength >= 3) return "Moderate";
  return "Weak";
};

export default function ScannerPage() {
  const [marketType, setMarketType] = useState<"forex" | "crypto" | "futures">("crypto");
  const [signals, setSignals] = useState<Signal[]>(generateMockSignals("crypto"));
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  // Update signals when market type changes
  useEffect(() => {
    setSignals(generateMockSignals(marketType));
    setLastUpdate(new Date());
  }, [marketType]);

  // Auto-refresh signals every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRefreshing(true);
      // Simulate data refresh
      setTimeout(() => {
        setSignals(generateMockSignals(marketType));
        setLastUpdate(new Date());
        setIsRefreshing(false);
      }, 500);
    }, 20000); // 20 seconds

    return () => clearInterval(interval);
  }, [marketType]);

  // Load TradingView widget
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Clear previous widget
    if (scriptLoadedRef.current && container.firstChild) {
      container.innerHTML = "";
      scriptLoadedRef.current = false;
    }

    // Map market type to TradingView screener type
    const screenerTypeMap: Record<"forex" | "crypto" | "futures", string> = {
      forex: "forex",
      crypto: "crypto_mkt",
      futures: "cfd",
    };

    // Create and load TradingView script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: "600",
      defaultColumn: "overview",
      screener_type: screenerTypeMap[marketType],
      displayCurrency: "USD",
      colorTheme: "light",
      locale: "en",
      isTransparent: false,
    });

    container.appendChild(script);
    scriptLoadedRef.current = true;

    return () => {
      if (container && script.parentNode) {
        script.parentNode.removeChild(script);
        scriptLoadedRef.current = false;
      }
    };
  }, [marketType]);

  const handleManualRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setSignals(generateMockSignals(marketType));
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 500);
  };

  return (
    <div className="min-h-screen trading-bg-pattern">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-4">
            <Image
              src="/stable-collective-logo.png"
              alt="Stable Collective"
              width={216}
              height={216}
              className="rounded-full object-contain shrink-0"
            />
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Jubilee Market Scanner</h1>
              <p className="text-xl text-muted-foreground">
                Real-time market analysis across Forex, Crypto, and Futures with live entry signals — 4x | Futures | Crypto
              </p>
            </div>
          </div>

          {/* Market Type Selector */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <label className="text-sm font-semibold text-foreground">Market Type:</label>
              <Select value={marketType} onValueChange={(value: "forex" | "crypto" | "futures") => setMarketType(value)}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select market" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="forex">Forex</SelectItem>
                  <SelectItem value="crypto">Crypto</SelectItem>
                  <SelectItem value="futures">Futures</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
              <button
                onClick={handleManualRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-accent transition-colors disabled:opacity-50"
                title="Refresh signals"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Main Scanner Widget */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Market Scanner - {marketType.charAt(0).toUpperCase() + marketType.slice(1)}</CardTitle>
                      <CardDescription>
                        Real-time market analysis with live entry signals
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      Live
                    </Badge>
                  </div>
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
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Entry Signals</CardTitle>
                      <CardDescription>Live trading opportunities</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {signals.length} active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 max-h-[600px] overflow-y-auto">
                    {signals.map((signal, index) => (
                      <div
                        key={`${signal.symbol}-${index}`}
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
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span className={`font-bold ${signal.action === "BUY" ? "text-green-500" : "text-red-500"}`}>
                            {signal.action}
                          </span>
                          <span className="text-muted-foreground">@{signal.price}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={`text-xs ${getStrengthColor(signal.strength)} text-white border-0`}
                            >
                              {getStrengthLabel(signal.strength)}
                            </Badge>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    i < signal.strength ? getStrengthColor(signal.strength) : "bg-muted"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            <span>{signal.time}</span>
                          </div>
                        </div>
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
                  <strong>Note:</strong> This scanner provides market analysis tools. Signals auto-refresh every 20 seconds. Always conduct your own research
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
