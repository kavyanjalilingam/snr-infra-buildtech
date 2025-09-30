# Lead Form Setup Guide

## Overview
This guide explains how to configure the multi-step lead form to send data to your CRM or webhook endpoint.

## Configuration Steps

### 1. Update Webhook URL

Open `src/components/LeadForm.tsx` and locate the `handleSubmit` function (around line 88).

Replace the placeholder with your actual webhook URL:

```typescript
const handleSubmit = async () => {
  // Replace with your actual CRM webhook URL
  const webhookUrl = "YOUR_CRM_WEBHOOK_URL_HERE";
  
  const leadData = {
    ...formData,
    utm_source: "instagram",
    utm_campaign: "rental_property_ad",
    utm_medium: "paid_social",
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadData)
    });

    if (!response.ok) {
      throw new Error("Failed to submit lead");
    }

    setSubmitted(true);
  } catch (error) {
    console.error("Error submitting lead:", error);
    toast({
      title: "Submission failed",
      description: "Please try again later",
      variant: "destructive"
    });
  }
};
```

### 2. UTM Parameters

The form automatically includes the following UTM parameters:
- `utm_source`: "instagram"
- `utm_campaign`: "rental_property_ad"
- `utm_medium`: "paid_social"

You can customize these in the `handleSubmit` function based on your ad campaign structure.

### 3. Data Structure

The lead form submits the following data:

```json
{
  "name": "Full Name",
  "phone": "1234567890",
  "email": "email@example.com",
  "plotOwnership": "yes" or "planning",
  "city": "Hyderabad",
  "budget": "20 Lakhs – 30 Lakhs",
  "utm_source": "instagram",
  "utm_campaign": "rental_property_ad",
  "utm_medium": "paid_social",
  "timestamp": "2025-09-30T12:00:00.000Z"
}
```

## Popular CRM Integrations

### Zapier
1. Create a new Zap with "Webhooks by Zapier" as trigger
2. Select "Catch Hook"
3. Copy the webhook URL
4. Paste it in the `webhookUrl` variable

### Make.com (Integromat)
1. Create a new scenario
2. Add "Webhooks" module
3. Select "Custom webhook"
4. Copy the webhook URL
5. Paste it in the `webhookUrl` variable

### Custom API
If you have your own API endpoint:
```typescript
const webhookUrl = "https://api.yourcompany.com/leads";
```

## Testing

1. Open the browser console
2. Fill out the lead form
3. Check the console logs for the submitted data
4. Verify the data is received by your webhook/CRM

## Validation Rules

- **Name**: Required, trimmed, max 100 characters
- **Phone**: Required, exactly 10 digits
- **Email**: Optional, valid email format if provided
- **Plot Ownership**: Required radio selection
- **City**: Required dropdown selection
- **Budget**: Required selection

## Export Formats for Instagram Ads

### Feed Ad (1080×1350)
- Recommended for Instagram Feed placements
- Aspect ratio: 4:5
- Safe zone: Center 1080×1080 area

### Story Ad (1080×1920)
- Recommended for Instagram Stories
- Aspect ratio: 9:16
- Safe zone: Top 250px and bottom 150px

To create export-ready versions, take screenshots of the landing page at these dimensions or use design tools like Figma/Canva with the built page as reference.

## A/B Testing Variants

### Variant A - Price First
Emphasize the price badge in the headline area for price-conscious audiences.

### Variant B - Trust First
Lead with "Built on Trust, Rooted in Quality" tagline for brand-focused campaigns.

Track performance using different `utm_campaign` values:
- `rental_property_ad_price_first`
- `rental_property_ad_trust_first`

---

**SNR Infra BuildTech** — Built on Trust, Rooted in Quality
