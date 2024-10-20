// Simple prioritization logic based on severity and request urgency
const prioritizeRequests = (requests) => {
    return requests.sort((a, b) => {
        return b.severity - a.severity;  // Higher severity comes first
    });
};

module.exports = { prioritizeRequests };
