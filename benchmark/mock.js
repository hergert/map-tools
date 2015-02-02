google = {}
google.maps = {
  event: {
    addListenerOnce: function(instance, event, cb)
    {
      cb()
    },
    addListener: function(instance, event, cb)
    {
      cb()
    }
  },
  LatLng: function(lat, lng) {
    return {
      latitude: parseFloat(lat),
      longitude: parseFloat(lng),

      lat: function() { return this.latitude; },
      lng: function() { return this.longitude; }
    };
  },
  LatLngBounds: function(ne, sw) {
    return {
      getSouthWest: function() { return sw; },
      getNorthEast: function() { return ne; }
    };
  },
  OverlayView: function() {
    return {};
  },
  InfoWindow: function() {
    return {open: function(){}, setContent: function(x){this.content = x}};
  },
  Marker: function(marker) {

    marker.setAnimation = function() {
      return 'animation set';
    };

    marker.setVisible = function(value) {
      marker.visible = value;
    };

    marker.setPosition = function(value) {
      marker.position = value;
    };

    return marker;

  },
  MarkerImage: function() {
    return {};
  },
  Map: function() {
    return {gm_bindings_: {}, data: {
      addGeoJson: function(json) {
        return [{ag: {D: 53}}, {ag: {D: 30}}]
      },
      overrideStyle: function(feature, style) {
        return feature.style = style;
      }
    }};
  },
  Point: function() {
    return {};
  },
  Size: function() {
    return {};
  },
  Polygon: function() {

  },
  MapTypeId: {
    ROADMAP: 1
  },

  ZoomControlStyle: {
    'DEFAULT': '1'
  },

  ControlPosition: {
    'TOP_LEFT': '1'
  }
}

google.maps.Polygon.prototype.getBounds = function() {}
google.maps.Polygon.prototype.containsLatLng = function() {}
